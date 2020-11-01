import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  
    state = {
        supportValue: ''
    }

    nextPage = () => {
        console.log('check', this.props.history, this.state.feeling);
        // not sure if this dispatch should be this.state or this.state.feeling
        this.props.dispatch( {type: 'SUPPORT', payload: this.state})
        this.props.history.push('/4');
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
                <input type="number" onChange={this.handleChange}/>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default connect()(Support);