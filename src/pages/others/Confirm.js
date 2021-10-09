import React,{Component} from 'react';
import "./Confirm.css";
import {Link} from "react-router-dom";

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.change=this.change.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    
  }

  handleSubmit(event) {
    alert('Ordering ride to: ' + this.state.value);
    event.preventDefault();
  }
  change(){
    document.getElementById("form").style.display="none";
    document.getElementById("confirmy").style.display="block";
  }
/// <h1>{this.state.message}</h1><button onClick={()=>this.change()}>Change</button>onClick={this.change}
  render() {
    return (
      <>
        <div id="body">
       
        <form  id="form" onSubmit={this.handleSubmit}>
        <label>
          <h2>WHERE ARE YOU HEADING?</h2>
        </label>
        <input type="text" id="destination" placeholder="Destination?" value={this.state.value} onChange={this.handleChange} />
        <button class="button" type="submit" onClick={this.change}>Confirm</button>
           
      </form>
      
      <div id="confirmy">
         <div class="split">
            <p><h1>Order Confirmed</h1>
            <h3>Ride on its Way</h3>
            </p>
            <p>Destination: {this.state.value}</p>
            <div class="motorcycle">
              <i class="fas fa-motorcycle fa-2x"></i>
            </div>    
        </div>
        <Link to="/"><button class="back">Back to Home</button></Link>  
      </div>
 
      </div> 
      </>
     

    );
  }
}

export default Confirm;