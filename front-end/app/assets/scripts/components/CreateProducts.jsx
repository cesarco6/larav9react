import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/product'

const CreateProducts = () => {
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {
            descripcion: description, 
            precio: price, 
            existencia: stock})
        navigate('/')
    }
    
  return (
    <div className="wrapper wrapper--narrow form__container">
        <h3 className="form__title">Create Product</h3>
        <form onSubmit={store} >
           <div className="row row--gutters"> 
                <div className='row__medium-4'>
                    <label className='form__label'>Description</label>
                </div>    
                <div className="row__medium-8">
                    <input 
                            value={description}
                            onChange={ (e)=> setDescription(e.target.value)}
                            type='text'
                            className='form__input'
                    />
                </div>
            </div>     
            <div className="row row--gutters">               
                <div className='row__medium-4'>
                    <label className='form__label'>Price</label>
                </div>
                <div className="row__medium-8">    
                    <input 
                        value={price}
                        onChange={ (e)=> setPrice(e.target.value)}
                        type='number'
                        className='form__input'
                    />
                </div>
            </div>
            <div className="row row--gutters">
                <div className='row__medium-4'>
                    <label className='form__label'>Stock</label>
                </div>
                <div className="row__medium-8">
                    <input 
                        value={stock}
                        onChange={ (e)=> setStock(e.target.value)}
                        type='number'
                        className='form__input'
                    />
                </div>
            </div>
            <button type='submit' className='btn btn--form'>Store</button>
        </form>
    </div>
  )
}

export default CreateProducts