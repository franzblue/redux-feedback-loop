import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

class Support extends Component {
  
    state = {
        supportValue: ''
    }

    nextPage = () => {
        if(this.state.supportValue === '' || this.state.supportValue === null || this.state.supportValue === undefined 
                 || this.state.supportValue < 1 || this.state.supportValue > 6) {
            swal("Oops!", "Please enter a value between 1 and 6", "warning");
        }
        else {
            this.props.dispatch( {type: 'SUPPORT', payload: this.state})
            this.props.history.push('/4');
        }
    }

    handleChange = (event) => {
        console.log('consoling some log', event.target.value);
        this.setState({
            supportValue: event.target.value
          })
    }


    render() {
        return(
            <div>
                <h2>How well are you being supported?</h2>
                <p>Please enter a number one through six.</p>
                <input type="number" onChange={this.handleChange} placeholder="1-6"/>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default connect()(Support);