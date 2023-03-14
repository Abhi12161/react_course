import react, { Component } from "react"

class Message extends Component{
constructor(){
    super()
    this.state={
        message:'welcome home'
    }
}

    render(){
        return(
        <h1>{this.state}</h1> 
        )
           
        
    }
}

export default Message;