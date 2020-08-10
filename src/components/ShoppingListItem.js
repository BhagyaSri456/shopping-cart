import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingListItem extends Component {

    render() {
        const { id, description, cost, image } = this.props.product;
        return (
            <div className="shopping-item">
                <Link to={`/item/${id}`}>
                    <img src={image} className="item-image"></img>
                </Link>
                <div>
                    <div className="item-description">{description}</div>
                    <div className="item-cost">{cost} INR </div>
                </div>
            </div>
        );
    }
}