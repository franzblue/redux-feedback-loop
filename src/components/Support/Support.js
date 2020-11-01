import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  
    nextPage = () => {
        console.log('check', this.props.history);
        this.props.history.push('/4');
    }

    render() {
        return(
            <div>
                <h2>How well are you being supported?</h2>
                <input type="number"/>
                <button onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default connect()(Support);