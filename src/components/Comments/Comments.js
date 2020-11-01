import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        commentsValue: ''
    }

    nextPage = () => {
        console.log('check', this.props.history, this.state.feeling);
        // not sure if this dispatch should be this.state or this.state.feeling
        this.props.dispatch( {type: 'COMMENTS', payload: this.state})
        // this.props.history.push('/');
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
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.nextPage}>Next</button>
            </div>
           
        )
    }
}

export default connect()(Comments);