import React from "react"
import ReactDOM from "react-dom"
import '../styles/styles.css'
import App from './App'


const container = document.getElementById('app');
ReactDOM.render(<App />, container);


if (module.hot) {
  module.hot.accept()
}
