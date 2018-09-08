import React, { Component } from "react";

const timer = WrappedComponent => 
  class extends Component {
    constructor(props) {
      super(props);
  
      this.state = { secondsPassed: 0 }
      this.startTime = new Date();
      this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
      this.updateTimer();
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    unsubscribe() {
      this.startTime = null;
      this.timeoutId = null;
    }

    updateTimer() {
      const second = 1000;
      this.timeoutId = setTimeout(this.handleChange, second);
    }

    handleChange() {
      const storedTime = new Date();
      const secondsPassed =  ((storedTime - this.startTime) / 1000) | 0;
      this.setState({ secondsPassed }, () => this.updateTimer());
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          secondsPassed={this.state.secondsPassed}
        />
      );
    }
  };

export default timer;
