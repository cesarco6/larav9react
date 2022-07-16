import React from "react"
import styled from 'styled-components'

const Modal = () => {
  return (
    <>
      <Overlay>
        <ContenedorModal>
            <EncabezadoModal>
                <h3>Título</h3>
            </EncabezadoModal>
            <BotonCerrar>X</BotonCerrar>
        </ContenedorModal>
      </Overlay>
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
    background: rgba(183,194,199,.2);
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContenedorModal = styled.div`
    width: 45%;
    min-height: 15vh;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: 20px;
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
    }
`;

const BotonCerrar = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;

    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: 300ms ease all;
    border-radius: 5px;
    color: #1766DC;

    &:hover {
        background: #d6cece;
    }
`;