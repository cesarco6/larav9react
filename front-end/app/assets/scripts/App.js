import React from 'react'
import Eventos from './components/Eventos'

import Parrafo from './components/Parrafo'
import Variables from './components/Variables'

const App = () => {
  return (
    <div>
        <h1>Hello World Reactive</h1>
        <Parrafo />
        <Variables />
        <Eventos />
    </div>
  )
}

export default App