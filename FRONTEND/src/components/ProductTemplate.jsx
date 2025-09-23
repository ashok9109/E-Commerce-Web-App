import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router';
import { asyncupdateuser } from "../store/actions/userActions";

const ProductTemplate = ({ p }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducer);

  const AddtoCardHandler = () => {
    const copyUser = { ...user, cart: [...user.cart] };
    const index = user.cart.findIndex((ci) => ci.product.id == p.id);
    if (index == -1) {
      copyUser.cart.push({ product: p, quantity: 1 });
    } else {
      copyUser.cart[index] = {
        ...copyUser.cart[index],
        quantity: copyUser.cart[index].quantity + 1
      }
    }
    dispatch(asyncupdateuser(user.id, copyUser))
    navigate('/cart')
  }

  return (
    <>
      <div className='h-[67vh] w-[23%] shadow-lg shadow-black hover:scale-104 p-5 mr-5 mb-5 bg-white rounded-lg ' key={p.id} >
        <img className='h-[50%] block m-auto ' src={p.image} alt="" />
        <h1 className='text-xl mt-4 mb-3 underline' >{p.title.slice(0, 18)}</h1>
        <div className='flex items-center justify-evenly mb-5 '>
          <h1>_{p.brand}_</h1>
          <h1><span className='text-red-600' >price</span>:- {p.price.currency}</h1>
          <h1><span className='text-red-600' >price</span>:- {p.price.amount}</h1>
        </div>
        <p>{p.description.slice(0, 90)}....</p>
        <div className='flex justify-between mt-3' >
          <Link className='text-blue-600' > More Info</Link>
          <button
          onClick={AddtoCardHandler}
           className='bg-orange-600 text-white px-5 py-1 rounded-sm ' >Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default ProductTemplate;
