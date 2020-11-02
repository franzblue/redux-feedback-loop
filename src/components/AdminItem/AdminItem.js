import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';

class AdminItem extends Component {

    delete = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, this feedback will be lost forever.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                console.log('clicked delete', this.props.item.id);
                axios.delete(`/feedback/${this.props.item.id}`).then((response) => {
                    console.log('DELETE back from server', response);
                    this.props.getDB();
                    }).catch((error) => {
                        console.log('DELETE error', error);
                    })
            }
            else {
                swal("This feedback was not deleted.");
              }
        });
    } 



     

    render() {
        return(
            <>
                <td>{this.props.item.feeling}</td>
                <td>{this.props.item.understanding}</td>
                <td>{this.props.item.support}</td>
                <td>{this.props.item.comments}</td>
                <td onClick={this.delete}><span role="img" aria-labelledby="trash bin">🗑️ </span></td>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
});

export default connect(putReduxStateOnProps)(AdminItem);