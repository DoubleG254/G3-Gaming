import React from "react";
import logo from "./images/logo.png"
import { NavLink } from "react-router-dom";

function NavBar(){
     
    return(
        <div>
            <header>
                <img src={logo} alt="logo"/>
                <h1>G3 Games</h1>
            </header>
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/games">Games</NavLink>
                <NavLink to="/cart">Cart</NavLink>

            </nav>
        </div>
        
    )
}

export default NavBar