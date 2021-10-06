import React,{useState} from 'react';
import "./Way.css";
import Confirm from './Confirm';
import {Link} from "react-router-dom";


function Way() {
    return (
        <>
        <section>
        <div class="container">
        <div class="split">
             <h1>Order Confirmed</h1>
            <p>Ride on its Way {this.state.value}</p>
        </div>
        <Link to="/"><button class="back">Back to Home</button></Link>   
        </div>
        
        </section>
        </>
       
    )
}

export default Way
