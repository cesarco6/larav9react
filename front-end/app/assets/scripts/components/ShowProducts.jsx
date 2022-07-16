import React, {useEffect,useState} from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'

import styled from 'styled-components'
import Modal from './Modal'


const endpoint = 'http://localhost/frontyback/larav9react/api/public/api'

const ShowProducts = () => {
    const [ products, setProducts ] = useState([])
    

    useEffect (() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data)
        //console.log(response)
    }
    

  return (
    <div className="table wrapper">
    <h1 className="table__title">Products Table</h1>
    <header className="table__header">        
      <Link to="/create" className="btn btn--large">Create</Link>
    </header>
    <table className="table">    
    <thead className='table__head'>
                <tr>
                    <th>Num</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="table__body">
                { products.map( (product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td> {product.descripcion} </td>    
                        <td> {product.precio} </td>    
                        <td> {product.existencia} </td>    
                        <td className="table__body table--btns">
                            <Link to={`/edit/${product.id}`} className='btn btn--edit tooltip'>
                            <span className="material-symbols-outlined">edit</span>
                            <span className="tooltiptext">E d i t</span>
                            </Link>
                            <button className="btn btn--delete tooltip">
                                <span className="tooltiptext">D e l e t e</span>
                                <span className="material-symbols-outlined">delete</span>
                            </button>     
                           <Modal />
                        </td>
                    </tr>
                )) }
            </tbody>
    </table>
  </div>
  
  )
}

export default ShowProducts

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;