const currentTask = process.env.npm_lifecycle_event
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')
const cssMinimizer = require('css-minimizer-webpack-plugin')
const htmlWebp = require('html-webpack-plugin')
const fs_e = require('fs-extra')
const webpack = require('webpack')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),  
  require('autoprefixer')   
]

let cssConfig = {
  test: /\.css$/i,
  use: ['css-loader', {loader: 'postcss-loader', // css-loader?url=false
  options: {postcssOptions: {plugins: postCSSPlugins }}}]
}

class RunAfterCompile {
  apply(compiler) {
      compiler.hooks.done.tap('Copy images', function() {
          fs_e.copySync('./app/assets/images', './docs/assets/images')
      })
  }
}

let pages = fs_e.readdirSync('./app').filter(function(file) {
  return file.endsWith('.html')
}).map(function(page) {
  return new htmlWebp({
      filename: page,
      //inyect:false,
      template: `./app/${page}`
  })
})


let config = {
  entry: './app/assets/scripts/Main.js',
  plugins: pages,
  module: {
      rules:[
          cssConfig,
          {
            test: /\.(js|jsx)$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-react', '@babel/preset-env']
                }
              }
          }]    
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    }
}

if (currentTask == 'dev') {
  cssConfig.use.unshift('style-loader')
  config.output = {
      //publicPath: "/",  //new
      path: path.resolve(__dirname,'app'),
      filename: 'bundled.js'
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.devServer =  {
      before: function(app, server) {
         server._watch('./app/**/*.html')
       },  
      contentBase: path.join(__dirname, 'app'),
      /*static: {
        directory: path.join(__dirname, 'app')
      }, */
      
       liveReload: false, //new
       hot: true,
       historyApiFallback: {index: "index.html"}, //new
       port: 3000,
       host: '0.0.0.0'
     }
  config.mode = 'development'
}

if (currentTask == 'build') {

  cssConfig.use.unshift(MiniCssExtract.loader)
  config.output = {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'docs')
  }
  config.mode = 'production'
  config.optimization = {
      splitChunks: {chunks: 'all'},
      minimize: true,
      minimizer: [`...`, new cssMinimizer()]
  }

  config.plugins.push(
                      new CleanWebpackPlugin(), 
                      new MiniCssExtract({filename: 'styles.[chunkhash].css'}),
                      new RunAfterCompile()
  )
}

module.exports = config