import React, {Component} from "react";
// import {Router, Route, browserHistory, IndexRoute} from "react-router"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import About from "./About";

class App extends Component {
  render() {
    return (
      <Router >
        <div>
          <Header/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    )
  }
}

export default App;
