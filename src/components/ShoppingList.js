import React, { Component } from 'react';
import ShoppingListItem from './ShoppingListItem';
import products from '../products-data';


export default class ShoppingList extends Component {
    render() {
        return (
            <div className="items-wrapper">
                {
                    products.map(product =>
                        <ShoppingListItem key={product.id} product={product} />
                    )
                }
            </div>
        );
    }
}