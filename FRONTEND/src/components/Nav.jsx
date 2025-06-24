import { NavLink } from 'react-router';

const Nav = () => {
    return (
        <>
            <nav className='flex items-center justify-evenly text-2xl text-red-600 pt-5' >
                <NavLink
                    className={({ isActive }) => (isActive ? "text-red-600" : "")}
                    to='/'>Home</NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "text-red-600" : "")}
                    to='/setting'>User Setting</NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "text-red-600" : "")}
                    to='/create-product'>Create Product</NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "text-red-600" : "")}
                    to='/cart'>cart</NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "text-red-600" : "")}
                    to='/signin'>Signin</NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "text-red-600" : "")}
                    to='/About'>About</NavLink>
            </nav>
        </>
    )
}

export default Nav;
