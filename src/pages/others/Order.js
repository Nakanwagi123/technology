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
      <div class="split">
        <Link to="/confirmation"><button class="next">Next Step</button></Link>     
        </div>
    <Geolocation/>
    </section>
      
    </>
    );
}

export default Order;