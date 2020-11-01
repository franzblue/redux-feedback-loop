import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminItem extends Component {
    render() {
        return(
            <>
            {this.props.reduxStore.adminReducer
            .map( (item, index) => 
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.feeling}</td>
                <td>{item.understanding}</td>
                <td>{item.support}</td>
                <td>{item.comments}</td>
                <td>🗑️ </td>
            </tr> )}
            </>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
});

export default connect(putReduxStateOnProps)(AdminItem);


//             // this.response.data.map(item => { })

//             // { props.reduxStore.bookList.map( (book, index) => 
//             //     <li key={index}>{book.title} by {book.author}</li>  
//             //   )}