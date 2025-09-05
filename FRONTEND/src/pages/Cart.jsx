import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {

  const { user } = useSelector((state) => state.userReducer)

  return (
    <>
    <div className=' bg-blue-200 pt-30 ' >
    <h1 className='text-center text-3xl font-bold' >Your Cart</h1>
      <div className='h-50 w-full  ' >
        {user.cart.map((ci, i) => {
          return(
            <div key={i}>
            <img src={ci.product.image} alt="" />
          </div>
          );
        })};
      </div>
    </div>

    </>
  );
};

export default Cart;
