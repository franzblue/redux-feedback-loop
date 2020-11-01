import React, { Component } from 'react';
import { connect } from 'react-redux';
import Links from '../Links/Links';

class Comments extends Component {

    state = {
        commentsValue: ''
    }

    nextPage = () => {
        console.log('check', this.props.history, this.state.commentsValue);
        // not sure if this dispatch should be this.state or this.state.feeling
        this.props.dispatch( {type: 'COMMENTS', payload: this.state})
        this.props.history.push('/5');
    }

    handleChange = (event) => {
        console.log('consoling some log', event.target.value);
        this.setState({
            commentsValue: event.target.value
          })
    }

    render() {
        return(
            <div>
                <h2>Any comments you want to leave?</h2>
                <p>Feel free to tell us how you really feel.</p>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.nextPage}>Next</button>
                <Links />
            </div>
           
        )
    }
}

export default connect()(Comments);