import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import MainHeaderLink from '../MainHeaderLink/MainHeaderLink';
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand"  to="/">Hello!</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <MainHeaderLink activeOnlyWhenExact={true}  to="/home" label="Home"/>
                        <MainHeaderLink activeOnlyWhenExact={true}  to="/projects" label="Porjects"/>
                        <MainHeaderLink activeOnlyWhenExact={true}  to="/contacts" label="Contacts"/>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;