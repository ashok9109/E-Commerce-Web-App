import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from '../store/actions/userActions';
import { useNavigate } from 'react-router';

const Setting = () => {
  const { user } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      password: user?.password
    }
  });

  const UpdateHandler = (updatehandler) => {
    dispatch(asyncupdateuser(user?.id, updatehandler));
  };

  const LogoutHandler = (user) => {
    dispatch(asynclogoutuser());
    navigate("/signin");
  }

  const DeleteHandler = () => {
    dispatch(asyncdeleteuser(user.id));
  }

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center  pt-20" id='settings' >
        <div className='h-130 w-140 flex flex-col items-center justify-center border-4 rounded-sm p-10 ' >
          <h1 className='ml-10 text-teal-400 text-3xl font-bold underline' >Settings</h1>
          <form
            onSubmit={handleSubmit(UpdateHandler)}
            className='h-full w-full flex flex-col p-5 ' >
            <div className='w-70 flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg '>
              <input
                {...register("email", { required: "email is required" })}
                className="outline-0"
                type="email" placeholder='email' />
              <h1 className="text-sm" ><i className="ri-mail-fill"></i></h1>
            </div>
            {errors.email && (
              <span className="text-red-500" >{errors.email.message}</span>
            )}
            <div className='w-70 flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg '>
              <input
                {...register("password", { required: "password is required" })}
                className="outline-0"
                type="pasword" placeholder='******' />
              <h1 className="text-sm" ><i className="ri-git-repository-private-fill"></i></h1>
            </div>
            {errors.password && (
              <span className="text-red-500" >{errors.password.message}</span>
            )}
            <div className='flex items-center justify-center gap-10 mt-10 '>
              <button
                className='text-2xl px-6 py-4 text-white bg-black mb-4 rounded-sm'
              >Update User</button>
              <button
                onClick={DeleteHandler}
                type='button'
                className='text-2xl px-6 py-4 text-white bg-[#032A6A] mb-4 rounded-sm '
              >Delete User</button>

            </div>
            <button
              onClick={LogoutHandler}
              type='button'
              className='text-2xl px-6 py-4 text-white bg-teal-400 mt-10 '
            >Logout User</button>
          </form>

        </div>
      </div>
    </>
  )
}

export default Setting;
