import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  
    state = {
        understandingValue: ''
    }

    nextPage = () => {
        console.log('check', this.props.history, this.state.feeling);
        // not sure if this dispatch should be this.state or this.state.feeling
        this.props.dispatch( {type: 'UNDERSTANDING', payload: this.state})
        this.props.history.push('/3');
    }

    handleChange = (event) => {
        console.log('consoling some log', event.target.value);
        this.setState({
            understandingValue: event.target.value
          })
    }


    render() {
        return(
            <div>
                <h2>How well are you understanding the content?</h2>
                <input type="number" onChange={this.handleChange}/>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default connect()(Understanding);