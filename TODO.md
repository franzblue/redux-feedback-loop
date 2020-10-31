## SET UP
- [x] NPM install
    - [x] redux react-redux
    - [x] redux-logger
- [] import index.js requirements
    - [x] logger
    - [x] middlewware
    - [x] redux
    - [x] creatstore
    - [x] combineReducers
    - [x] provider
- [] import App.js requirements
    - [] connect
    - [] HashRouter as Router, Route, Link
- [] import Component requirements
    - [] import { withRouter } from 'react-router-dom';
    - [] connect
- [x] set up DB
    - [x] create table


## COMPONENTS
- [] Feeling
    - [] Number input
- [] Understanding
    - [] Nunber input
- [] Support
    - [] Number input
- [] Comments
    Text input
- [] Input Fields Component
    - [] F, U and S Components can share
    - [] Next button
- [] Review Component
    - [] displays all data from previous inputs
    - [] Submit button
        - [] sends feedback data to server
        - [] when clicked, save submission in DB
        - [] alert user of success
        - [] button to take new survey
            - [] reset all data and return to first step


## REDUX
- [] components dispatch data to store
    - [] store holds onto data in array until submit is clicked
        - [] then sends all data to DB