import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  
    nextPage = () => {
        console.log('check');
        this.props.history.push('/4');
    }

    render() {
        return(
            <div>
                <h2>How well are you being supported?</h2>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default Support;