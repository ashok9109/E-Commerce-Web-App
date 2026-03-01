import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router';
import { nanoid } from "@reduxjs/toolkit";
import { signupUser } from "../apis/UserApis";
import { useState } from "react";


const signup = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // =============states for loading and errors============
  const [serverMsg, setServerMsg] = useState("");
  const [errorServerMsg, setErrorServerMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const signuphandler = async (user) => {
    setLoading(true);
    try {
      let newUserObj = {
        fullName: {
          firstName: user.firstName,
          lastName: user.lastName
        },
        email: user.email,
        password: user.password,
        id: nanoid()
      }
      const res = await signupUser(newUserObj)
      if (res) {
        setServerMsg("Account Created Successfully✅")
        reset();
      }
    } catch (error) {
      console.log("Register form error", error);
      setErrorServerMsg("Account is not created and try again❌")
      reset()
    }finally{
      setLoading(false);
    }

  }
  return (
    <>
      <section className='min-h-screen w-full flex items-center justify-center bg-background'>
        <div className="w-full md:h-140 md:w-230 flex items-center justify-center rounded-lg relative overflow-hidden shadow-lg shadow-black">
          <div className="w-full md:h-140 flex items-center justify-center md:w-115 p-10 bg-gradient" >

            {/* form and input feilds */}
            <form onSubmit={handleSubmit(signuphandler)} className='w-full md:w-115 flex items-center justify-center flex-col md:p-20'>
              <h1 className="text-white text-4xl font-bold font-sans" >Registration</h1>

              {/* First name input */}
              <div className='w-full flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg'>
                <input {...register("firstName", { required: "First name is required" })}
                  className="outline-0"
                  type="text" placeholder='First Name' />
                <h1 className="text-sm" ><i className="ri-user-fill"></i></h1>
              </div>
              {errors.firstName && (<span className="text-red-500 text-sm" >{errors.firstName.message}</span>)}

              {/* last name input */}
              <div className='w-full flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg'>
                <input {...register("lastName", { required: "last name is requird" })}
                  className="outline-0"
                  type="text" placeholder='last Name' />
                <h1 className="text-sm" ><i className="ri-user-fill"></i></h1>
              </div>
              {errors.lastName && (<span className="text-red-500 text-sm">{errors.lastName.message}</span>)}

              {/* email input */}
              <div className='w-full flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg '>
                <input {...register("email", { required: "email is required" })}
                  className="outline-0"
                  type="email" placeholder='email' />
                <h1 className="text-sm" ><i className="ri-mail-fill"></i></h1>
              </div>
              {errors.email && (<span className="text-red-500 text-sm" >{errors.email.message}</span>)}

              {/* password input */}
              <div className='w-full flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg' >
                <input {...register("password", { required: "password is required" })}
                  className="outline-0"
                  type="pasword" placeholder='******' />
                <h1 className="text-sm" ><i className="ri-git-repository-private-fill"></i></h1>
              </div>
              {errors.password && (<span className="text-red-500 text-sm" >{errors.password.message}</span>)}

              {/* status showing */}
              {serverMsg && (<div>{serverMsg}</div>)}
              {errorServerMsg && (<div>{errorServerMsg}</div>)}

              <button disabled={loading} className='w-full bg-gradient text-white rounded-sm text-xl px-4 py-2 mt-4 hover:bg-gray-800' >{loading ? "...loading":"Sign-up"}</button>
            </form>
          </div>

          {/* Rigth div */}
          <div className='h-140 w-115 hidden md:flex flex items-center justify-center flex-col rounded-lg z-[999]' >
            <h1 className=" font-sans text-3xl font-bold mb-4 text-white " >HELLO, WELCOME!</h1>
            <p className="opacity-70 text-white" >Already have an account ?</p>
            <Link className='text-white border-2 px-10 py-2 text-sm rounded-lg mt-3 hover:bg-gray-800' to='/signin' >Login</Link>
          </div>
          <div className="h-140 w-140 hidden md:block bg-gradient absolute right-[-140px] rounded-[150px]" ></div>
        </div>
      </section>
    </>
  )
}

export default signup;

