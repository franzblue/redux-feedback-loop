import React, { Component } from 'react';
import axios from 'axios';
import AdminItem from '../AdminItem/AdminItem';
import { connect } from 'react-redux';

class Admin extends Component {

    state = {
        dbObject: {}
    }

    componentDidMount = () => {
        this.getDB();
    }

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
            <>
            {/* {JSON.stringify(this.props.reduxStore.adminReducer)} */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    <AdminItem />
                </tbody>
                <tfoot>
                    <tr id="foot">
                        <td colSpan="6"></td>
                    </tr>
                </tfoot>
            </table>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
});

export default connect(putReduxStateOnProps)(Admin);