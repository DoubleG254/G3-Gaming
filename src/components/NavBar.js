import React from "react";
import logo from "./images/logo.png"
import { NavLink } from "react-router-dom";

function NavBar(){
     
    return(
        <div className="flex justify-between p-2 bg-violet-500 ">
            <header className="flex ml-10 mt-2">
                <img src={logo} alt="logo" className="rounded-full w-28"/>
                <h1 className="text-4xl font-bold text-blue-300 p-4 mt-4">G3 Games</h1>
            </header>
            <nav className="mr-20 text-3xl mt-6 p-4 text-blue-200 ">
                <NavLink exact to="/" className='hover:text-yellow-300 '>Home</NavLink>
                <NavLink to="/games" className="ml-10 hover:text-yellow-300">Games</NavLink>
                <NavLink to="/cart"className="ml-10 hover:text-yellow-300">Cart</NavLink>

            </nav>
        </div>
        
    )
}

export default NavBar