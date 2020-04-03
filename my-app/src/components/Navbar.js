import React, { Component } from 'react';
import logo from '../images/imggg.png';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom'


export default class Navbar extends Component {
    state={
        isOpen:false
    };
    handleToggle = () => {
        this.setState({ isOpen:!this.state.isOpen });
    };
    render() {
        return (
            <nav className="Navbar">
                <div className="nav-center">
                   <div className="nav-header">
                       <Link to="/">
                           <img src={logo} alt="llsls" />
                       </Link>
                   </div>
                </div>
            </nav>
        );
    }
}

