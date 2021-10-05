import React from "react";
import './Home.css';
import {Link} from "react-router-dom";


function Home(){
    return(
    <>
   <section class="order">
       <div class="container">
           <div class="split">
           <div class="placeorder"><p>Lets get you there!</p><Link to="/order"><button><h4>Order a Ride</h4></button></Link></div>
           <div class="slider"><p>hello</p></div>
           <div class="welcome"><p>WELCOME TO RIDEMYWAY!</p></div>
           </div>
       </div>
   </section>
   <section>
       <div class="containerone">
           <div class="split">
               <div class="title">
                   <p>BROWSE CATEGORIES</p><p><hr/></p>
                </div>
                <div class="testing">

                <div class="groupone">
                <div class="card"><div class="figure"></div><div class="alt">Trending</div></div>
                <div class="cardone"><div class="figureone"></div><div class="alt">Top Offers</div></div>
                </div>

               <div class="grouptwo">
               <div class="cardtwo"><div class="figuretwo"></div><div class="alt">Recent</div></div>
               <div class="cardthree"><div class="figurethree"></div><div class="alt">History</div></div>
               </div>
                   
                </div>
           </div>
       </div>
   </section>
  
        
    </>);
}
export default Home;