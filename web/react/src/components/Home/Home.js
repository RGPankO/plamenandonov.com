import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">My name is Plamen Andonov. I am a full-stack web developer.</p>
            </div>
        )
    }
}

export default Home;