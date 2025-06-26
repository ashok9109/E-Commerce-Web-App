import React from 'react'
import { useForm } from 'react-hook-form';

const Setting = () => {

  const { register, handleSubmit } = useForm();

  return (
    <>
      <div className='pt-10 pl-7'>
        <form className='h-140 w-130 flex flex-col p-5 border-2 ' >
          <input
            {...register("username")}
            className='text-2xl p-4 mb-6 border-b '
            name='username' type="text" placeholder='admin' />
          <input
            {...register("email")}
            className='text-2xl p-4 mb-6 border-b '
            name='email' type="text" placeholder='admin@gmail.com' />
          <input
            {...register("password")}
            className='text-2xl p-4 mb-6 border-b '
            name='password' type="text" placeholder='*******' />
            <button 
            className='text-2xl px-6 py-4 text-white bg-blue-600 mb-4'
            >Update User</button>
              <button 
            className='text-2xl px-6 py-4 text-white bg-blue-600 mb-4'
            >Delete User</button>
              <button 
            className='text-2xl px-6 py-4 text-white bg-blue-600 mb-4'
            >Logout User</button>
            
        </form>
      </div>
    </>
  )
}

export default Setting;
