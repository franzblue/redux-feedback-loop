import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        feelingValue: ''
    }
    
    nextPage = () => {
        console.log('check', this.props.history, this.state.feeling);
        // not sure if this dispatch should be this.state or this.state.feeling
        this.props.dispatch( {type: 'FEELING', payload: this.state})
        this.props.history.push('/2');
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
                <input type="number" onChange={this.handleChange}/>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default connect()(Feeling);