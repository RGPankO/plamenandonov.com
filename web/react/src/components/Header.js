import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import MainHeaderLink from './MainHeaderLink';
class Header extends Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <ul>
                    <MainHeaderLink activeOnlyWhenExact={true}  to="/home" label="Home"/>
                    <MainHeaderLink activeOnlyWhenExact={true}  to="/about" label="About"/>
                </ul>
            </div>
        )
    }
}

export default Header;