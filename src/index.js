import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = (state=[], action) => {
    if( action.type === 'FEELING') {
        return action.payload
    }
    if( action.type === 'CLEAR'){
        state = [];
        return state;
    }
    return state;
}
const understandingReducer = (state=[], action) => {
    if( action.type === 'UNDERSTANDING') {
        return action.payload
    }
    if( action.type === 'CLEAR'){
        state = [];
        return state;
    }
    return state;
}
const supportReducer = (state=[], action) => {
    if( action.type === 'SUPPORT') {
        return action.payload
    }
    if( action.type === 'CLEAR'){
        state = [];
        return state;
    }
    return state;
}
const commentsReducer = (state=[], action) => {
    if( action.type === 'COMMENTS') {
        return action.payload
    }
    if( action.type === 'CLEAR'){
        state = [];
        return state;
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();




// reducer pieces


// to clear inputs
// if(action.type === 'CLEAR_ORDER'){
//     state = [];
//     return state;
// }
// return state;