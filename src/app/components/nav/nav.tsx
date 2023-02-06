import React from "react";
import {NavLink} from 'react-router-dom'
import  './nav.scss'

const NavBar = () => {
    return (
        <div className="nav-container">
            <div>artworks</div>
            <ul>
                <li>
                    <NavLink to={"favourites"}>
                        Kedvencek 
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/"}>
                        Otthon
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;