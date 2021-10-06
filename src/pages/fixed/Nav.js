import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom";

function Nav(){

    
    return(
    <>
    <header>
    <div class="closure">
    <div class="logos"><h1 class="logo">Logo</h1></div>
    <div class="notification"> <p>not</p></div>
    </div>
          <input type="checkbox" id="nav-toggle" class="nav-toggle"/>
        <nav>
            <ul>
            <li><Link to="/account" class="link">Account</Link></li>
            <li><Link to="/" class="link">Menu</Link></li>
            <li><a href="#">RideHistory</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Signup to drive</a></li>
            </ul>
        </nav>
        <label for="nav-toggle" class="nav-toggle-label"><span></span></label>
    </header>
    </>
        );
}

export default Nav;