import React, { Component } from 'react';

class ErrorBoundry extends Component {
    contructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    ComponentDidCath(error, infor) {
        this.setState({hasError: true })
    }


    render () {
    if (this.state.hasError)
        return <h1> Oops, That is not good.</h1>
    }
}

export default ErrorBoundry;