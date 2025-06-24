import { useForm } from "react-hook-form";
import { Link } from 'react-router';

const signup = () => {
  const { register, handleSubmit, reset } = useForm()

  const signuphandler = () => {
    reset()
  }
  return (
    <>
      <div className='flex items-center justify-center mt-30 ' >
        <form
          onSubmit={handleSubmit(signuphandler)}
          className=' h-70 w-80  flex items-center justify-center  flex-col border-2' >
          <input
            {...register("username")}
            className='border-b text-xl p-2 '
            type="text" placeholder='username' />
          <input
            {...register("email")}
            className='border-b text-xl p-2 '
            type="email" placeholder='email' />
          <input
            {...register("password")}
            className='border-b text-xl p-2 '
            type="pasword" placeholder='******' />
          <input
            {...register("number")}
            className='border-b text-xl p-2 '
            type="number" placeholder='number' />
          <button
            className='bg-blue-600 text-white text-xl px-4 py-2 mt-4' >Login</button>
          <p>Already have an account {""}
            <Link className='text-blue-600'
              to='/signin' >signin</Link></p>
        </form>
      </div>
    </>
  )
}

export default signup;

