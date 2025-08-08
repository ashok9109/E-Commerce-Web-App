import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {

  const { user } = useSelector((state) => state.userReducer)

  return (
      <div>
        {user.cart.map((ci, i) => {
          return(
            <div key={i}>
            <img src={ci.product.image} alt="" />
          </div>
          );
        })};
      </div>
  );
};

export default Cart;
