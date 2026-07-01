import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axiosInstance from '../api/config';
import { useParams } from 'react-router';

const ProductDetails = () => {

  const { id } = useParams();

  const [product, setProduct] = useState(null);


  // =================================
  // fetching the single product 
  // ==================================

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axiosInstance.get(`/api/products/single/product/${id}`);
        if (response)
          setProduct(response.data.product);
        console.log("product this", product)
      } catch (error) {
        console.log("error while fetching the product", error);
      }
    }
    fetchProduct();
  }, [id])


  return (
    <section>

      <main className='h-screen w-full bg-background' >
      {/* left div */}
      <div className='' >
      </div>

      {/* right div */}
      <div>

      </div>
      </main>

    </section>
  )
}

export default ProductDetails;
