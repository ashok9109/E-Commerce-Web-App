import { useSelector } from "react-redux";
import { NavLink } from 'react-router';

const Nav = () => {

    const { user } = useSelector((state) => state.userReducer);

    return (
        <>
            <nav className=' h-15 w-370 flex items-center justify-between bg-black text-xl text-white p-2 mt-3 ml-5  mr-7 rounded-lg pl-15 pr-15 absolute z-99' >
                <div >
                    <h1 className="text-blue-600"> <span className="text-red-600">-V-</span> card.</h1>
                </div>
                <div>
                    <div className="flex bg-white text-black rounded-lg">
                        <input
                            className="w-80 outline-0 px-3  "
                            type="text" placeholder="search" />
                        <h1 className="text-black text-2xl" ><i className="ri-search-eye-line"></i></h1>
                    </div>
                </div>
                <div className="flex gap-15">
                    <NavLink
                        className={({ isActive }) => (isActive ? "text-white bg-orange-600 px-3 py-1 rounded-lg" : "")}
                        to='/'>Home</NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "text-white bg-orange-600 px-3 py-1 rounded-lg" : "")}
                        to='/product'>Product</NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "text-white bg-orange-600 px-3 py-1 rounded-lg" : "")}
                        to='/About'>About</NavLink>
                    {user ? (
                        <>
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-white bg-orange-600 px-3 py-1 rounded-lg" : "")}
                                to='/cart'>cart</NavLink>
                            <NavLink />
                            {user?.role == "admin" && (
                                <NavLink
                                    className={({ isActive }) => (isActive ? "text-white bg-red-600 px-3 py-1 rounded-lg" : "")}
                                    to='/create-product'>Create Product</NavLink>
                            )}
                            {user?.role == "seller" && (
                                <NavLink
                                    className={({ isActive }) => (isActive ? "text-white bg-red-600 px-3 py-1 rounded-lg" : "")}
                                    to='/create-product'>Create Product</NavLink>
                            )}
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-white bg-teal-400 px-3 py-1 rounded-lg" : "")}
                                to='/setting'>Settings</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-black bg-white px-3 py-1 rounded-lg" : "")}
                                to='/signin'>Login</NavLink>
                        </>
                    )}
                </div>
            </nav>
        </>

    )
}

export default Nav;
