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
                    swal("This feedback has been deleted!", {
                        icon: "success",
                      });
            }
            else {
                swal("This feedback was not deleted.");
              }
        });
    } 

    flag = () => {
        swal({
            title: "Flag this entry?",
            text: "You can save this feedback for future reference",
            icon: "info",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                console.log('clicked flag');
                axios.put(`/feedback/${this.props.item.id}`).then((response) => {
                    console.log('put back from server', response);
                    this.props.getDB();
                    }).catch((error) => {
                        console.log('DELETE error', error);
                    });
                    swal("This feedback has been flagged!", {
                        icon: "success",
                    });
            } else {
              swal("You did not flag this entry.");
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
                <td onClick={this.flag}><span role="img" aria-labelledby="flag">🚩</span></td>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
});

export default connect(putReduxStateOnProps)(AdminItem);