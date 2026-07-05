import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axiosInstance from '../api/config';
import { useParams } from 'react-router';
import Footer from '../components/Footer';
import { Minus, Plus } from 'lucide-react';

const ProductDetails = () => {

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);


  // =================================
  // fetching the single product 
  // ==================================

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axiosInstance.get(`/api/products/single/product/${id}`);
        if (response)
          setProduct(response.data.product);
      } catch (error) {
        console.log("error while fetching the product", error);
      }
    }
    fetchProduct();
  }, [id])


  const increasequantity = () => {
    setQuantity(quantity + 1)
  }

  const decreasequantity = () => {
    setQuantity(quantity - 1)
  }

  if (!product) {
    return <h1 bg-background >....loading</h1>
  }

  return (
    <section>

      <main className='h-screen w-full flex flex-col md:flex-row items-center bg-background' >

        {/* lefte div */}
        <div className='h-full w-full border-r-1 border-white flex items-center p-10 justify-center' >
          <img className='h-full md:h-[300px] rounded-lg' src={product.image} alt="product image" />
        </div>

        {/* Right div */}
        <div className='h-full w-full flex flex-col  p-5 md:p-10 text-white' >
          <h1 className='text-xl md:text-4xl font-bold' >{product.title}</h1>
          <h1>Price :- {product.price?.currency} {product.price?.amount}</h1>
          <h1>⭐⭐⭐⭐⭐ (Customer Review)</h1>
          <p className='' >{product.description}</p>

          {/* add to cart button and counting button div */}
          <div className='flex items-center justify-center gap-2 md:gap-20' >
            <div className='flex itmes-center justify-center gap-2 md:gap-10' >
              <span>Quantity</span>
              <button className='' onClick={decreasequantity} >
                <Minus />
              </button>
              <span>{quantity}</span>
              <button className='' onClick={increasequantity} >
                <Plus />
              </button>
            </div>

            {/* add to cart */}
            <button className='bg-black text-white p-2 text-sm md:px-10 md:py-4 rounded-sm' >
              ADD TO CART
            </button>
          </div>
          <h1><span>Stock</span>:- {product.stock}</h1>
          <h1><span>Category</span> :- {product.category}</h1>
          <h1><span>Brand</span> :- {product.brand}</h1>
        </div>
      </main>
      <Footer />
    </section>
  )
}

export default ProductDetails;
