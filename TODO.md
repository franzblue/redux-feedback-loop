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
    - [x] connect
    - [x] HashRouter as Router, Route, Link
- [] import Component requirements
    - [] import { withRouter } from 'react-router-dom';
    - [] connect
- [x] set up DB
    - [x] create table


## COMPONENTS
- [] Feeling
    - [x] Number input
- [] Understanding
    - [x] Nunber input
- [] Support
    - []x Number input
- [] Comments
    - [x] Text input
- [] Input Fields Component
    - [] alert user if fields are empty
    - [] F, U and S Components can share
    - [x] Next button
- [] Review Component
    - [] displays all data from previous inputs
    - [] Submit button
        - [x] sends feedback data to server
        - [x] when clicked, save submission in DB
        - [x] alert user of success
        - [] button to take new survey
            - [] reset all data and return to first step


## REDUX
- [x] components dispatch data to store
    - [x] store holds onto data in array until submit is clicked
        - [x] then sends all data to DB