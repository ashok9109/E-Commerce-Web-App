import React from 'react'
import { Link } from 'react-router';

const ProductTemplate = ({ p }) => {
  
  return (
    <>
        <div className='h-[67vh] w-[23%] shadow-lg shadow-black p-5 mr-5 mb-5 bg-white rounded-lg '  key={p.id} >
          <img className='h-[50%] block m-auto ' src={p.image} alt="" />
          <h1 className='text-xl mt-4 mb-3 underline' >{p.title.slice(0,18)}</h1>
          <div className='flex items-center justify-evenly mb-5 '>
          <h1>_{p.brand}_</h1>
          <h1><span className='text-red-600' >price</span>:- {p.price}</h1>
          </div>
          <p>{p.description.slice(0,90)}....</p>
          <div className='flex justify-between mt-3' >
            <Link className='text-blue-600' > More Info</Link>
            <button className='bg-orange-600 text-white px-5 py-1 rounded-sm ' >Add to Cart</button>
          </div>
        </div>
    </>
  )
}

export default ProductTemplate;
