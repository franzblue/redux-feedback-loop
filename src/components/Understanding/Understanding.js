import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  
    nextPage = () => {
        console.log('check', this.props.history);
        this.props.history.push('/3');
    }

    render() {
        return(
            <div>
                <h2>How well are you understanding the content?</h2>
                <input type="number"/>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default Understanding;