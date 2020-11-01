import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    nextPage = () => {
        console.log('check', this.props.history);
        this.props.history.push('/2');
    }

    render() {
        return(
            <div>
                <h2>How are you feeling today?</h2>
                <input type="number"/>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default Feeling;