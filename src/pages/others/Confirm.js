import React,{Component} from 'react';
import "./Confirm.css";
import {Link} from "react-router-dom";

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Ordering ride to: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <div id="body">
        <form  id="form" onSubmit={this.handleSubmit}>
        <label>
          <h2>WHERE ARE YOU HEADING?</h2>
        </label>
        <input type="text" id="destination" placeholder="Destination?" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" class="submit" value="Confirm" />
      </form>
      <Link>Thank you next</Link>
      </div> 

    );
  }
}

export default Confirm;