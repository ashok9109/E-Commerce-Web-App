import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router';
import { signinUser } from "../apis/UserApis";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginuser } from "../store/reducers/userSlice";

const signin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const signinhandler = async (user) => {
    try {
      const loggedInUser = await signinUser(user);
      if (loggedInUser) {
        dispatch(loginuser(loggedInUser))
        toast.success("Signin Successfully")
        navigate("/");
      }
      reset()
    } catch (error) {
      console.log("login form error", error)
    }
  }
  return (
    <>
      <section className="min-h-screen md:min-h-screen w-full flex items-center justify-center bg-gradient">

        {/* left div */}
        <div className="w-full md:h-140 md:w-230 flex items-center justify-center rounded-lg relative overflow-hidden shadow-lg shadow-black mt-4">
          <div className="h-140 w-140 bg-gradient absolute left-[-140px] rounded-[150px] hidden md:flex"></div>
          <div className=' h-140 w-115 flex items-center justify-center flex-col rounded-lg z-[999] hidden md:flex' >
            <h1 className=" font-sans text-3xl font-bold mb-4 text-white ">HELLO, WELCOME!</h1>
            <p className="opacity-70 text-white ">Don,t have an account ?</p>
            <Link className='text-white border-2 px-10 py-2 text-sm rounded-lg mt-3 hover:bg-gray-800' to='/signup' >Register</Link>
          </div>

          {/* right div */}
          <div className='h-full md:h-140 w-115 flex items-center justify-center bg-gradient' >

            {/* form and input feilds */}
            <form onSubmit={handleSubmit(signinhandler)}
              className='md:h-full w-full flex items-center justify-center flex-col rounded-lg space-y-10 p-24' >
              <h1 className="text-white text-4xl font-bold" >Login </h1>

              {/* Email */}
              <div className='w-full flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg '>
                <input {...register("email", { required: "email is required" })}
                  className="outline-0"
                  type="email" placeholder='email' />
                <h1 className="text-sm" ><i className="ri-mail-fill"></i></h1>
              </div>
              {errors.email && (<span className="text-red-500" >{errors.email.message}</span>)}

              {/* Password */}
              <div className='w-full flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg '>
                <input {...register("password", { required: "password is required" })}
                  className="outline-0"
                  type="pasword" placeholder='******' />
                <h1 className="text-sm" ><i className="ri-git-repository-private-fill"></i></h1>
              </div>
              {errors.password && (<span className="text-red-500" >{errors.password.message}</span>)}

              {/* button */}
              <button className='w-full bg-gradient text-white rounded-sm text-xl px-4 py-2 mt-4 hover:bg-gray-800' >Login</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default signin;
