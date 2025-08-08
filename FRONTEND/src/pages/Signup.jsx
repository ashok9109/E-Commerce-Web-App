import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router';
import { asyncsignupuser } from "../store/actions/userActions";
import { nanoid } from "@reduxjs/toolkit";

const signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm()

  const signuphandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = [];
    dispatch(asyncsignupuser(user));
    toast.success("Signup Successfully")
    navigate("/signin");
  }
  return (
    <>
      <div className='h-screen w-screen flex items-center justify-center bg-white  ' >
        <div className="h-130 w-230 flex items-center justify-center rounded-lg relative overflow-hidden shadow-lg shadow-black mb-10 ">
          <div className="h-130 w-115 bg-white">
            <form
              onSubmit={handleSubmit(signuphandler)}
              className='h-full w-115 flex items-center justify-center  flex-col ' >
              <h1 className="text-black text-4xl font-bold font-sans" >Registration</h1>
              <div className='w-70 flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg ' >
                <input
                  {...register("username")}
                  className="outline-0"
                  type="text" placeholder='username' />
                <h1 className="text-sm" ><i className="ri-user-fill"></i></h1>
              </div>
              <div className='w-70 flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg '>
                <input
                  {...register("email")}
                  className="outline-0"
                  type="email" placeholder='email' />
                <h1 className="text-sm" ><i className="ri-mail-fill"></i></h1>
              </div>
              <div className='w-70 flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg '>
                <input
                  {...register("password")}
                  className="outline-0"
                  type="pasword" placeholder='******' />
                <h1 className="text-sm" ><i className="ri-git-repository-private-fill"></i></h1>
              </div>
              <div className='w-70 flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg ' >
                <input
                  {...register("number")}
                  className="outline-0"
                  type="number" placeholder='number' />
                <h1 className="text-sm" ><i className="ri-contacts-fill"></i></h1>
              </div>
              <button
                className='w-70 bg-black text-white rounded-sm text-xl px-4 py-2 mt-4 hover:bg-gray-800'
              >signup</button>
              <div className="mt-4">
                <p>or login with social platforms</p>
                <div className="flex gap-5 mt-2">
                  <h1 className="border-1 rounded-sm px-3 py-2 " ><i className="ri-google-line"></i></h1>
                  <h1 className="border-1 rounded-sm px-3 py-2 " ><i className="ri-facebook-fill"></i></h1>
                  <h1 className="border-1 rounded-sm px-3 py-2 " ><i className="ri-github-fill"></i></h1>
                  <h1 className="border-1 rounded-sm px-3 py-2 " ><i className="ri-linkedin-fill"></i></h1>
                </div>
              </div>
            </form>
          </div>
          <div className=' h-130 w-115 flex items-center justify-center flex-col rounded-lg z-[999] '>
            <h1 className=" font-sans text-3xl font-bold mb-4 text-white ">HELLO, WELCOME!</h1>
            <p className="opacity-70 text-white ">Already have an account ?</p>
            <Link
              className='text-white border-2 px-10 py-2 text-sm rounded-lg mt-3 hover:bg-gray-800'
              to='/signin' >Login</Link>
          </div>
          <div className="h-130 w-140 bg-black absolute right-[-140px] rounded-[150px]"></div>
        </div>
      </div>
    </>
  )
}

export default signup;

