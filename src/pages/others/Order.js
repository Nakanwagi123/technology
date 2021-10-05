import React from "react";
import "./Order.css";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Geolocation from "../hooks/Geolocation";
import Confirm from "./Confirm";
import {Link} from "react-router-dom";


function Order(){
 
    return(
    <>
     <section>
    <div class="container">
        <div class="split">
      
        <Link to="/confirm"><button>Next Page</button></Link>
        </div>
    </div>
     <Router>
        <Confirm/>
        <Geolocation/>
    </Router>
    </section>
    </>
    );
}

export default Order;