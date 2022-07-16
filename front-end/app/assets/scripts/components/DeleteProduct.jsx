import React, { useEffect } from "react"

const endpoint = 'http://localhost/frontyback/larav9react/api/public/api'
/*
const deleteProduct = async (id) => {
  await axios.delete(`${endpoint}/product/${id}`)
  getAllProducts()
}
*/

function DeleteProduct({ closeModal }) {
  return (
    <>                            
      <div className="modal" id="modal">
        <div className="modal-content">
          <button className="modal-close" 
                  title="Close Modal"
                  onClick={() => closeModal(false)}>X</button>
          <h3>Delete Product, Are you sure?</h3>
          <div className="modal-area">
              <p>Delete Product:  
                  
              </p>
              <button className="modal-close" onClick={() => closeModal(false)}>Cancel</button>
            <button className='btn btn--delete'>
                D E L                       
            </button>
          </div>
        </div>
      </div>                        
    </>
  )
}

export default DeleteProduct