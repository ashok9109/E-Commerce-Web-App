import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router';
import { asyncsigninuser } from "../store/actions/userActions";
import { toast } from "react-toastify";

const signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm()

  const signinhandler = (user) => {
    try {
      dispatch(asyncsigninuser(user));
      toast.success("Signin Successfully")
      navigate("/");
    } catch (error) {
      console.log("login form error", error)
    }
  }
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center bg-white ">
        <div className="h-150 w-230 flex items-center justify-center rounded-lg relative overflow-hidden shadow-lg shadow-black mt-19  ">
          <div className="h-150 w-140 bg-black absolute left-[-140px] rounded-[150px]"></div>
          <div className=' h-150 w-115 flex items-center justify-center flex-col rounded-lg z-[999] '>
            <h1 className=" font-sans text-3xl font-bold mb-4 text-white ">HELLO, WELCOME!</h1>
            <p className="opacity-70 text-white ">Don,t have an account ?</p>
            <Link
              className='text-white border-2 px-10 py-2 text-sm rounded-lg mt-3 hover:bg-gray-800'
              to='/signup' >Register</Link>
          </div>
          <div className='h-150 w-115 flex items-center justify-center bg-white ' >
            <form
              onSubmit={handleSubmit(signinhandler)}
              className=' h-full w-full flex items-center justify-center  flex-col rounded-lg' >
              <h1 className="text-black text-4xl font-bold" >Login</h1>
              <div className='w-70 flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg '>
                <input
                  {...register("email",{required:"email is required"})}
                  className="outline-0"
                  type="email" placeholder='email' />
                <h1 className="text-sm" ><i className="ri-mail-fill"></i></h1>
              </div>
              {errors.email && (
                <span className="text-red-500" >{errors.email.message}</span>
              )}
              <div className='w-70 flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg '>
                <input
                  {...register("password",{required:"password is required"})}
                  className="outline-0"
                  type="pasword" placeholder='******' />
                <h1 className="text-sm" ><i className="ri-git-repository-private-fill"></i></h1>
              </div>
              {errors.password  && (
                <span className="text-red-500" >{errors.password.message}</span>
              )}
              <button
                className='w-70 bg-black text-white rounded-sm text-xl px-4 py-2 mt-4 hover:bg-gray-800'
              >Login</button>
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
        </div>
      </div>
    </>
  )
}

export default signin;
