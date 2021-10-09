import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom";

class Nav extends React.Component{
    light=()=>{
        if (document.getElementById("nav-toggle").checked){
            document.getElementById("notification").style.backgroundColor="greenyellow"
        }
        else {
            document.getElementById("notification").style.backgroundColor="maroon"
        }
        
    }
    render(){
        return(
    <>
    <header>
    <div class="closure">
    <div class="logos"><h1 class="logo">Logo</h1></div>
    <div class="notification" id="notification"><i class="far fa-bell fa-2x"></i></div>
    </div>
          <input onClick={()=>this.light()} type="checkbox" id="nav-toggle" class="nav-toggle"/>
        <nav id="nav">
            <ul>
            <li><Link to="/account" class="link">Account</Link></li>
            <li><Link to="/" class="link">Menu</Link></li>
            <li><Link to="/ridehistory" class="link">RideHistory</Link></li>
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
    
}

export default Nav;