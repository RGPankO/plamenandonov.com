import React from "react";
import { Route, Link } from "react-router-dom";
import Parser from 'html-react-parser';

const MainHeaderLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <li className="nav-item" className={match ? "active" : ""}>
        <Link to={to} className="nav-link">{label}{Parser(match ? '<span class="sr-only">(current)</span>' : '')}</Link>
      </li>
    )}
  />
);

export default MainHeaderLink;