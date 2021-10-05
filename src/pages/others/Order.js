import React from "react";
import "./Order.css";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Geolocation from "../hooks/Geolocation";
import {Link} from "react-router-dom";


function Order(){
 
    return(
    <>
     <section>
    <div class="container">
        <div class="split">
        <div class="formy">
        <form class="form" id="conjure">
            <label for="destname"><h2>WHERE ARE YOU HEADING?</h2></label><br/>
            <input type="text" id="destination" name="destination" placeholder="Destination?"/><br/>
            <input type="submit" value="Confirm" class="submit"></input>
        </form>
        </div> 
        <Link to="/confirm"><button>Next Page</button></Link>
        </div>
    </div>
     <Router>
        <Geolocation/>
    </Router>
    </section>
    </>
    );
}

export default Order;