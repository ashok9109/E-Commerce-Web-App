import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router';
import { asyncsigninuser } from "../store/actions/userActions";

const signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm()

  const signinhandler = (user) => {
    dispatch(asyncsigninuser(user));
    navigate("/");
  }
  return (
    <>
      <div className='flex items-center justify-center mt-30 ' >
        <form
          onSubmit={handleSubmit(signinhandler)}
          className=' h-70 w-80  flex items-center justify-center  flex-col border-2' >
          <input
            {...register("email")}
            className='border-b text-xl p-2 '
            type="email" placeholder='email' />
          <input
            {...register("password")}
            className='border-b text-xl p-2 '
            type="pasword" placeholder='******' />
          <button
            className='bg-blue-600 text-white text-xl px-4 py-2 mt-4' >Login</button>
          <p>Don,t have an account {""}
            <Link
              className='text-blue-600'
              to='/signup' >signup</Link></p>
        </form>
      </div>
    </>
  )
}

export default signin;
