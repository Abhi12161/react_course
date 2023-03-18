import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello World!'
    };
  }

  changeMessage = () => {
    this.setState({
      message: 'Goodbye World!'
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Change Message</button>
      </div>
    );
  }
}

export default Message;