import React from 'react';

class Notf extends React.Component {
    constructor(props){
        super(props)
        this.state={count:0}
    }
    increment(){
        this.setState({count:this.state.count+1})
    }

    render(){
         return (
        <div>
        <button onClick={()=>this.increment()}></button> 
        </div>
    )
    }
   
}

export default Notf

