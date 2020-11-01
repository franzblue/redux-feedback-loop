import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminItem extends Component {

    delete = () => {
        console.log('clicked delete', this.props.reduxStore.adminReducer);
        // this.props.dispatch({type: 'DELETE', payload: this.props.item.id});
        // this.props.getDB();
    }

    render() {
        return(
            <>
            {this.props.reduxStore.adminReducer.map( (item, index) => 
            <tr key={index}>
                <td>{item.feeling}</td>
                <td>{item.understanding}</td>
                <td>{item.support}</td>
                <td>{item.comments}</td>
                <td onClick={this.delete}>🗑️ </td>
            </tr> 
            )}
            </>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
});

export default connect(putReduxStateOnProps)(AdminItem);