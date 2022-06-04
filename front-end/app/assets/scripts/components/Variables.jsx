import React from 'react'

const Variables = () => {
    const saludo = 'Hola desde constante'
    const imagen = 'https://previews.123rf.com/images/thodonal/thodonal2006/thodonal200600302/149087729-concepto-de-aplicaciones-con-iconos-conectados.jpg'
  return (
    <div>
        <h2>Nuevo componente {saludo}</h2>
        <img src={imagen} width="500px" alt="man with smartphone" />
    </div>
  )
}

export default Variables