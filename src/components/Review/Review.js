import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
    render() {
        return(
            <div>
                <h2>Review Your Feedback</h2>
            
                <p>Feeling: {this.props.reduxStore.feelingReducer.feelingValue}</p>
                <p>Understanding: {this.props.reduxStore.understandingReducer.understandingValue}</p>
                <p>Support: {this.props.reduxStore.supportReducer.supportValue}</p>
                <p>Comments: {this.props.reduxStore.commentsReducer.commentsValue}</p>

                <button>Submit</button>
            </div>
            
        )
    }
}


// need access to reduxStore to display selected values to user for review


const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
});

export default connect(putReduxStateOnProps)(Review);