import React, {Fragment, useState} from 'react'

const Eventos = () => {

      const [texto, setTexto] = useState('Texto desde estado')

      function eventoClick() {
      //console.log('Hello wey!');
      setTexto('Texto cambiado usando useState')
    }

  return (
    <Fragment>
        <hr />
        <h2>{ texto }</h2>
        <button onClick={eventoClick}>Click</button>
    </Fragment>
  )
}

export default Eventos