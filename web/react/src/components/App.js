import React, {Component} from "react";
import 'bootstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from "./Header/Header";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
const bootstrap_overriden = require('./sass/bootstrap.min.css');
const css = require('./sass/style.scss');

class App extends Component {
  render() {
    return (
      <Router >
        <div>
          <Header/>
          <Route path="/" exact component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contacts" component={Contacts}/>
        </div>
      </Router>
    )
  }
}

export default App;
