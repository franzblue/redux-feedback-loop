import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

class Understanding extends Component {
  
    state = {
        understandingValue: ''
    }

    nextPage = () => {
        console.log('check', this.props.history, this.state.understandingValue);
        // not sure if this dispatch should be this.state or this.state.feeling
        if(this.state.understandingValue === '' || this.state.understandingValue === null || this.state.understandingValue === undefined
                 || this.state.understandingValue < 1 || this.state.understandingValue > 6) {
            swal("Oops!", "Please enter a value between 1 and 6", "warning");
        }
        else {
            this.props.dispatch( {type: 'UNDERSTANDING', payload: this.state})
            this.props.history.push('/3');
        }
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
                <p>Please enter a number one through six.</p>
                <input type="number" onChange={this.handleChange}/>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default connect()(Understanding);