import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
    render() {
        return(
            <h2>Review Your Feedback</h2>
        )
    }
}

export default connect()(Review);