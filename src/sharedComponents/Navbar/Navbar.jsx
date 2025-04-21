import { NavLink, useNavigate } from "react-router-dom";
import UseContext from "../ContextProvider/UseContext";

const Navbar = () => {
    const { user, logOut } = UseContext();  
    const navigate = useNavigate();

    const navList = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/tourists'>Tourists Spot</NavLink></li>
        <li><NavLink to='/tourist'>Add Tourists Spot</NavLink></li>
        <li><NavLink to='tourists/list'>My List</NavLink></li>
    </>

    const btnLogout = () =>{
        logOut()
        navigate('/login');
    }
    return (
        <div className="navbar bg-base-100 shadow-sm fixed top-0 z-0 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#0F3D4C]">
                        {navList}
                    </ul>
                </div>
                <NavLink className="btn btn-ghost text-2xl text-[#0F3D4C]" to='/'>
                    <img src="https://i.ibb.co.com/QFfycZyq/logo.webp" alt="logo" className="w-10 h-10 rounded-full" />
                    TravelSphere</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#0F3D4C] text-lg">
                    {
                        navList
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? 
                    <div className="flex gap-5">
                        <img src={user.photoURL} className="w-10 h-10 rounded-full" />
                        <button onClick={btnLogout} className="btn btn-error text-[#0F3D4C] font-medium text-lg">Logout</button>
                    </div>
                    :
                        <div>
                            <NavLink className="btn text-[#0F3D4C] bg-[#3D8E95] font-medium text-lg" to='/login'>Login</NavLink>
                            <NavLink className="btn mx-3 text-[#0F3D4C] bg-[#D9ED82] font-medium text-lg" to='/register'>Register</NavLink>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;