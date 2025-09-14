import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router';
// import { asyncsignupuser } from "../store/actions/userActions";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const SellerSignup = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const signuphandler = (user) => {
    try {
      let newUserObj = {
        fullName: {
          firstName: user.firstName,
          lastName: user.lastName
        },
        email: user.email,
        password: user.password,
        role: user.role,
        id: nanoid()
      }
      //   dispatch(asyncsignupuser(newUserObj));
      toast.success("Seller Signup Successfully");
      navigate("/seller-signin");
      reset();

    } catch (error) {
      console.log("Seller Register form error", error);
    }
  }
  return (
    <>
      <div className='h-screen w-screen flex items-center justify-center bg-white ' >
        <div className="h-150 w-230 flex items-center justify-center rounded-lg relative overflow-hidden shadow-lg shadow-black mt-19 ">
          <div className="h-150 w-115 bg-white ">
            <form
              onSubmit={handleSubmit(signuphandler)}
              className='h-full w-115 flex items-center justify-center  flex-col ' >
              <h1 className="text-black text-4xl font-bold font-sans" >Registration</h1>
              <div className='w-70 flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg ' >
                <input
                  {...register("firstName", { required: "First name is required" })}
                  className="outline-0"
                  type="text" placeholder='First Name' />
                <h1 className="text-sm" ><i className="ri-user-fill"></i></h1>
              </div>
              {errors.firstName && (
                <span className="text-red-500 text-sm " >{errors.firstName.message}</span>
              )}
              <div className='w-70 flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg ' >
                <input
                  {...register("lastName", { required: "last name is requird" })}
                  className="outline-0"
                  type="text" placeholder='last Name' />
                <h1 className="text-sm" ><i className="ri-user-fill"></i></h1>
              </div>
              {errors.lastName && (
                <span className="text-red-500 text-sm">{errors.lastName.message}</span>
              )}
              <div className='w-70 flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg '>
                <input
                  {...register("email", { required: "email is required" })}
                  className="outline-0"
                  type="email" placeholder='email' />
                <h1 className="text-sm" ><i className="ri-mail-fill"></i></h1>
              </div>
              {errors.email && (
                <span className="text-red-500 text-sm" >{errors.email.message}</span>
              )}
              <div className='w-70 flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg '>
                <input
                  {...register("password", { required: "password is required" })}
                  className="outline-0"
                  type="pasword" placeholder='******' />
                <h1 className="text-sm" ><i className="ri-git-repository-private-fill"></i></h1>
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm" >{errors.password.message}</span>
              )}
              <div className='w-70 flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg ' >
                <select
                  {...register("role")}
                  className="w-full items-center outline-0" >
                  <option value="user">seller</option>
                </select>
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
              to='/seller-signin' >Login</Link>
          </div>
          <div className="h-150 w-140 bg-black absolute right-[-140px] rounded-[150px]"></div>
        </div>
      </div>
    </>
  )
}

export default SellerSignup;

