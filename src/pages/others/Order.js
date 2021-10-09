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
       
    </div>
     <Confirm/>
    <Geolocation/>
    </section>
      
    </>
    );
}

export default Order;