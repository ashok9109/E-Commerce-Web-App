import { useForm } from 'react-hook-form';


const Setting = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    try {
      console.log("this is the form data", data)
    } catch (error) {
      console.log("errro while submiting data", error)
    }

  };

  return (
    <>
      <section className="h-screen w-full flex flex-col items-center justify-center bg-background">
        <div className='w-full max-w-lg flex flex-col items-center justify-center bg-gradient p-10'>

          {/* Heading */}
          <h1 className='ml-10 text-teal-400 text-3xl font-bold underline' >Account Settings</h1>

          {/* form and inputs */}
          <form onSubmit={handleSubmit(onSubmit)} className='h-full w-full flex flex-col gap-4 md:p-5'>

            {/* Current password input */}
            <label className='text-white' >Current Password</label>
            <div className='w-full max-w-sm flex justify-between border-b bg-gray-200 text-xl p-2 rounded-lg'>
              <input {...register("currentPassword", { required: "Current Password is required" })}
                className="outline-0"
                type="text" placeholder='current Password' />
              <h1 className="text-sm hidden md:block" ><i className="ri-git-repository-private-fill"></i></h1>
            </div>
            {errors.currentPassword && (<span className="text-red-500" >{errors.currentPassword.message}</span>)}

            {/* New Password input */}
            <label className='text-white' >New Password</label>
            <div className='w-full max-w-sm flex justify-between border-b bg-gray-200 text-xl p-2 rounded-lg'>
              <input {...register("newPassword", { required: "New Password is required" })}
                className="outline-0"
                type="newPassword" placeholder='**********' />
              <h1 className="text-sm hidden md:block" ><i className="ri-git-repository-private-fill"></i></h1>
            </div>
            {errors.newPassword && (<span className="text-red-500" >{errors.newPassword.message}</span>)}

            {/* confirm Password input */}
            <label className='text-white' >Confirm Password</label>
            <div className='w-full max-w-sm flex justify-between border-b bg-gray-200 text-xl p-2 rounded-lg'>
              <input {...register("confirmPassword", { required: "Confirm Password is required" })}
                className="outline-0"
                type="newPassword" placeholder='**********' />
              <h1 className="text-sm hidden md:block" ><i className="ri-git-repository-private-fill"></i></h1>
            </div>
            {errors.confirmPassword && (<span className="text-red-500" >{errors.confirmPassword.message}</span>)}

            {/* change password button*/}
              <button className='w-full text-xl px-3 py-2 text-white bg-black rounded-sm' >Change Password</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Setting;
