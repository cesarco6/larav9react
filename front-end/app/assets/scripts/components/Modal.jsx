import React from "react"
import styled from 'styled-components'

const endpoint = 'http://localhost:8000/api'

const Modal = ({
        children, 
        estado, 
        cambiarEstado, 
        titulo = 'Alerta', 
        mostrarHeader,
        producto,
        mostrarOverlay,
        posicionModal
      }) => {      
        
  return (
    <>
      {estado && 
      <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
        <ContenedorModal>
          {mostrarHeader && 
            <EncabezadoModal>
                <h3>{titulo}</h3>
            </EncabezadoModal>
          } 
            <BotonCerrar onClick={() => 
            cambiarEstado(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
              <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
            </svg>
            </BotonCerrar>
          {children}
          
        </ContenedorModal>
      </Overlay>
      }
    </>
  )
}

export default Modal

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${props => props.mostrarOverlay ? 'rgba(183,194,199,.5)' : 'rgba(183,194,199,0)' };
    padding: 1.5rem;
    display: flex;
    align-items: ${props => props.posicionModal ? props.posicionModal : 'center' };
    justify-content: center;
`;

const ContenedorModal = styled.div`
    width: 45%;
    min-height: 15vh;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: 20px;
    border: 2px solid #c01c16;
    background-color: #fff;
`;

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 1px solid #b3adad;

    h3 {
        font-weight: 500;
        font-size: 1rem;
        color: #1766DC;
        margin: 5px;
    }
`;

const BotonCerrar = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;

    width: 32px;
    height: 32px;
    border: none;
    background: none;
    cursor: pointer;
    transition: 300ms ease all;
    border-radius: 2px;
    color: #1766DC;

    &:hover {
        background: #d6cece;
    }
`;