import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Testhome from "./Testhome";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Link to="/home/test">
                    Test link
                </Link>
                <Switch>
                    <Route path={this.props.match.url + "/test"} component={Testhome}/>
                </Switch>
            </div>
        )
    }
}

export default Home;