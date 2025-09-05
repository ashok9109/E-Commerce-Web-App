import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from '../store/actions/userActions';
import { useNavigate } from 'react-router';
import images from '../images/setting.png'

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
    navigate("/signin");
  }

  const DeleteHandler = () => {
    dispatch(asyncdeleteuser(user.id));
  }

  return (
    <>
      <div className="h-full flex items-center justify-center  pt-20">
        <div className='h-140 w-320 flex items-center justify-center bg-black shadow-lg shadow-black ' >
          <div className='h-130 w-145 ' >
            <h1 className='ml-10 text-teal-400 text-2xl font-bold underline' >Settings</h1>
            <form
              onSubmit={handleSubmit(UpdateHandler)}
              className='h-full w-full flex flex-col p-5 ' >
              <div className='w-40 flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg ' >
                <input
                  {...register("username")}
                  className="outline-0 w-31"
                  type="text" placeholder='ashok.yadav' />
                <h1 className="text-sm" ><i className="ri-user-fill"></i></h1>
              </div>
              <div className='w-80 flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg '>
                <input
                  {...register("email")}
                  className="outline-0 w-90"
                  type="email" placeholder='ashokyadavrtp200@gmail.com' />
                <h1 className="text-sm" ><i className="ri-mail-fill"></i></h1>
              </div>
              <div className='w-30 flex border-b bg-gray-200 text-xl p-2 mb-3 mt-4 rounded-lg '>
                <input
                  {...register("password")}
                  className="outline-0 w-20"
                  type="pasword" placeholder='*******' />
                <h1 className="text-sm" ><i className="ri-git-repository-private-fill"></i></h1>
              </div>
              <button
                className='text-2xl px-6 py-4 text-white bg-yellow-500 mb-4'
              >Update User</button>
              <button
                onClick={DeleteHandler}
                type='button'
                className='text-2xl px-6 py-4 text-white bg-teal-600 mb-4'
              >Delete User</button>
              <button
                onClick={LogoutHandler}
                type='button'
                className='text-2xl px-6 py-4 text-white bg-red-600 mb-4'
              >Logout User</button>
            </form>
          </div>
          <div className=' ' >
            <img className='h-140 w-150  ' src={images} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Setting;
