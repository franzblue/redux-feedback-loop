import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
import {HashRouter as Router, Link} from 'react-router-dom';


class Review extends Component {

    state = {
        feeling: '',
        understanding: '',
        support: '',
        comments: '',
    }

    componentDidMount = () => {
        // I get an error when I try to POST to database 
        // unless I call this function on componentDidMount
        this.submit();
    }

    submit = () => {
        console.log('in submit', this.state);
        this.setState( {
                feeling: Number(this.props.reduxStore.feelingReducer.feelingValue),
                understanding: Number(this.props.reduxStore.understandingReducer.understandingValue),
                support: Number(this.props.reduxStore.supportReducer.supportValue),
                comments: this.props.reduxStore.commentsReducer.commentsValue,
        })
        console.log('post submit', this.state)
        // axios POST this.state to database
        axios.post('/feedback', this.state).then((response) => {
            console.log('back from POST', response);
            swal("Thank you!", "Your feedback has been submitted!", "success");
            this.props.history.push('/6');
        }).catch((error) => {
            console.log('error from POST', error);
        })
    }

    render() {
        return(
            <Router>
                <div>
                    <h2>Review Your Feedback</h2>
                
                    <p>Feeling: {this.props.reduxStore.feelingReducer.feelingValue}</p>
                    <p>Understanding: {this.props.reduxStore.understandingReducer.understandingValue}</p>
                    <p>Support: {this.props.reduxStore.supportReducer.supportValue}</p>
                    <p>Comments: {this.props.reduxStore.commentsReducer.commentsValue}</p>
                    <button onClick={this.submit}>Submit</button>

                    <h2>Need to change an answer?</h2>
                    <p>Select a link below to edit response.</p>
                    <ul>
                        <li><Link to="/">Feeling</Link></li>
                        <li><Link to="/2">Understanding</Link></li>
                        <li><Link to="/3">Support</Link></li>
                        <li><Link to="/4">Comments</Link></li>
                    </ul>
                </div>
            </Router>
        )
    }
}

// need access to reduxStore to display selected values to user for review

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
});

export default connect(putReduxStateOnProps)(Review);