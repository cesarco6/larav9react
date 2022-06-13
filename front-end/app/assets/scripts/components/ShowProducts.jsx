import React, {useEffect,useState} from 'react'
import axios from 'axios'

import { Link, BrowserRouter as Router } from 'react-router-dom'

const endpoint = 'http://34.71.82.57/larav9react/api/api'

const ShowProducts = () => {
    const [ products, setProducts ] = useState([])
    useEffect (() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data)
        console.log(response)
    }


    const deleteProduct = async (id) => {
       await axios.delete(`${endpoint}/product/${id}`)
       getAllProducts()
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
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="table__body">
                { products.map( (product) => (
                    <tr key={product.id}>
                        <td > {product.descripcion} </td>    
                        <td > {product.precio} </td>    
                        <td > {product.existencia} </td>    
                        <td className="table__body table--btns">
                            <Link to={`/edit/${product.id}`} className='btn btn--edit tooltip'>
                            <span className="material-symbols-outlined">edit</span>
                            <span className="tooltiptext">E d i t</span>
                            </Link>
                            <button onClick={ ()=>deleteProduct(product.id) } className='btn btn--delete tooltip'>
                            <span className="material-symbols-outlined">delete</span>
                            <span className="tooltiptext">D e l e t e</span>
                            </button>
                        </td>
                    </tr>
                )) }
            </tbody>
    </table>
  </div>
  
  )
}

export default ShowProducts