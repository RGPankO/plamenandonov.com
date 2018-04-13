import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class Contacts extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Chit-chat</h1>
                <p className="lead">Easiest way to reach me is email - <a href="mailto:hello@plamenandonov.com">hello@plamenandonov.com</a>.</p>
                <p>Do add me on <a href="https://www.linkedin.com/in/plamen-andonov-7b82479b/">Linkedin so we keep in touch!</a></p>
            </div>
        )
    }
}

export default Contacts;