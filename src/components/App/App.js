import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
        </div>

        <Route exact path="/" component={Feeling}/>
        <Route exact path="/2" component={Understanding}/>
        <Route exact path="/3" component={Support}/>
        <Route exact path="/4" component={Comments}/>
        <Route exact path="/5" component={Review}/>
        <Route exact path="/6" component={Success}/>
        <Route exact path="/admin" component={Admin}/>
      </Router>
    );
  }
}

export default connect()(App);
