import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    message: "Disconnected!"
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ message: "Connected" });
    }, 2000);
  }

  render() {
    return (
      <div>
        <h2>Connection Status</h2>
        <p>Status: {this.state.message}</p>
      </div>
    );
  }
}

export default ConnectionStatus;
