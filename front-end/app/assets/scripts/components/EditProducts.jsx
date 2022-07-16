import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost/frontyback/larav9react/api/public/api/product/'

const EditProducts = () => {
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            descripcion: description,
            precio: price,
            existencia: stock
        })
        navigate('/')
    }
    
    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setDescription(response.data.descripcion)
            setPrice(response.data.precio)
            setStock(response.data.existencia)
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div  className="wrapper wrapper--narrow form__container">
        <h3 className="form__title">Edit Product</h3>
        <form onSubmit={update} >
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
            <button type='submit' className='btn btn--form'>Update</button>
        </form>
    </div>
    )
}

export default EditProducts
