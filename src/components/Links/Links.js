import React, { Component } from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';

class Links extends Component {
    render() {
        return(
            <Router>
                <ul>
                    <li><Link to="/">Feeling</Link></li>
                    <li><Link to="/2">Understanding</Link></li>
                    <li><Link to="/3">Support</Link></li>
                    <li><Link to="/4">Comments</Link></li>
                </ul>
           </Router>
        )   
    }
}

export default Links;