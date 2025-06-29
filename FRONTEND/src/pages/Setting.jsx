import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from '../store/actions/userActions';
import { useNavigate } from 'react-router';

const Setting = () => {
  const { user } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
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
    navigate("/signin")
  }

  const DeleteHandler = () =>{
    dispatch(asyncdeleteuser(user.id))
  }

  return (
    <>
      <div className='pt-10 pl-7'>
        <form
          onSubmit={handleSubmit(UpdateHandler)}
          className='h-140 w-130 flex flex-col p-5 border-2 ' >
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
          onClick={DeleteHandler}
            type='button'
            className='text-2xl px-6 py-4 text-white bg-blue-600 mb-4'
          >Delete User</button>
          <button
            onClick={LogoutHandler}
            type='button'
            className='text-2xl px-6 py-4 text-white bg-blue-600 mb-4'
          >Logout User</button>
        </form>
      </div>
    </>
  )
}

export default Setting;
