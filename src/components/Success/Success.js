import React, { Component } from 'react';
import { connect } from 'react-redux';

class Success extends Component {

    nextPage = () => {
        // need a dispatch to reset all data in store
        this.props.dispatch( {type: 'CLEAR'})
        this.props.history.push('/');
    }

    render() {
        return(
            <div>
                <h2>Your feedback is important.</h2>
                <h3>Would you like to take another survey?</h3>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default connect()(Success);