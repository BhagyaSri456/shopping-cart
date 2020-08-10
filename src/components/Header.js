import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Shopping Cart</h1>
                <Link to="/" className="link">Home</Link>
                <span style={{ padding: "0 5px" }}>|</span>
                <Link to="/cart" className="link">Cart</Link>
            </div>
        );
    }
}