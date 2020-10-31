import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    nextPage = () => {
        console.log('check');
        // this will happen this weekend
        this.props.history.push('/2');
    }

    render() {
        return(
            <>
            <h2>How are you feeling today?</h2>
            <button onClick={this.nextPage}>Next</button>
            </>
        )
    }
}

export default Feeling;