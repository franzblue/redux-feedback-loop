import React, { Component } from 'react';
import axios from 'axios';
import AdminItem from '../AdminItem/AdminItem';
import { connect } from 'react-redux';

class Admin extends Component {

    state = {
        dbObject: {}
    }

    componentDidMount = () => {
        // grab feedback from database
        this.getDB();
    }

    // grab feedback from database
    getDB = () => {
        axios.get('/feedback').then((response) => {
            console.log('GET back from server', response.data);
            this.setState( {
            dbObject: response.data
            })
            console.log(this.state.dbObject);
            this.props.dispatch( {type: 'DATABASE', payload: this.state.dbObject});
        }).catch((error) => {
            console.log('GET error', error);
        })
    }

    render() {
        return(
            // table to display feedback
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                        <th>Flagged</th>
                    </tr>
                </thead>
                {/* map through reduxStore to return feedback rows one by one */}
                <tbody id="tableBody">
                {this.props.reduxStore.adminReducer.map( (item, index) =>
                    <tr key={index}><AdminItem item={item} getDB={this.getDB}/></tr>)}
                </tbody>
                <tfoot>
                    <tr id="foot">
                        <td colSpan="6"></td>
                    </tr>
                </tfoot>
            </table>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
});

export default connect(putReduxStateOnProps)(Admin);