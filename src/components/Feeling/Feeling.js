import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

class Feeling extends Component {

    state = {
        feelingValue: ''
    }
    
    nextPage = () => {
        console.log('check', this.props.history, this.state.feelingValue);
        if(this.state.feelingValue === '' || this.state.feelingValue === null || this.state.feelingValue === undefined
                 || this.state.feelingValue < 1 || this.state.feelingValue > 6) {
            swal("Oops!", "Please enter a value between 1 and 6", "warning");
        }
        else {
            this.props.dispatch( {type: 'FEELING', payload: this.state})
            this.props.history.push('/2');
        } 
    }

    handleChange = (event) => {
        console.log('consoling some log', event.target.value);
        this.setState({
            feelingValue: event.target.value
          })
    }

    render() {
        return(
            <div>
                <h2>How are you feeling today?</h2>
                <p>Please enter a number one through six.</p>
                <input type="number" onChange={this.handleChange} placeholder="1-6"/>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default connect()(Feeling);