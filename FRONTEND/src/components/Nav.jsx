import { useSelector } from "react-redux";
import { NavLink } from 'react-router';

const Nav = () => {

    const { user } = useSelector((state) => state.userReducer);

    return (
        <>
            <nav className='h-17 w-full flex items-center justify-between bg-gradient text-lg text-[#F1E99D]  fixed z-99 p-6' >

                {/* heading */}
                <h1 className="text-[#F1E99D] text-sm md:text-lg"> <span className="text-black">e</span> -comm</h1>

                {/* search inputs */}
                {/* <div>
                    <div className="flex bg-white text-black rounded-lg hidden md:flex">
                        <input
                            className="w-80 outline-0 px-3  "
                            type="text" placeholder="search" />
                        <h1 className="text-black text-2xl" ><i className="ri-search-eye-line"></i></h1>
                    </div>
                </div> */}

                {/* maping and showing the nav links */}
                <div className="flex gap-15 hidden md:flex">
                    <NavLink className={({ isActive }) => isActive ? "border-b border-[#F1E99D]" : ""} to='/'>Home</NavLink>

                    <NavLink className={({isActive})=> isActive ?"border-b border-[#F1E99D]":""} to='/product'>Collection</NavLink>

                    {user ? (
                        <>
                            <NavLink className={({isActive})=> isActive ? "border-b border-[#F1E99D]":""} to='/cart'>Cart</NavLink>

                            {user?.role == "admin" && (
                                <NavLink className={({isActive})=> isActive ?"border-b border-[#F1E99D]":""} to='/create-product'>Create Product</NavLink>
                            )}

                            {user?.role == "user" && (
                                <NavLink className={({isActive})=> isActive ?"border-b border-[#F1E99D]":""} to='/create-product'>Create Product</NavLink>
                            )}

                            <NavLink className={({isActive})=> isActive ?"border-b border-[#F1E99D]":""} to='/setting'>Settings</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink className={({isActive})=> isActive ?"border-b border-[#F1E99D]":""} to='/cart'>Cart</NavLink>

                            <NavLink className={({isActive})=> isActive ?"border-b border-[#F1E99D]":""} to='/create-product'>Create Product</NavLink>

                            <NavLink className={({isActive})=> isActive ?"border-b border-[#F1E99D]":""} to='/contact'>Contact</NavLink>

                            <NavLink className={({isActive})=> isActive ?"border-b border-[#F1E99D]":""} to='/setting'>Settings</NavLink>

                            <NavLink className={({isActive})=> isActive ?"border-b border-[#F1E99D]":""} to='/signin'>Login</NavLink>
                        </>
                    )}
                </div>
            </nav>
        </>

    )
}

export default Nav;
