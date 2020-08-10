import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateQuantity, removeItem } from '../actions/cart';


class CartItem extends Component {
    state = {
        quantity: this.props.product.quantity
    }
    decrementQuantity = () => {
        const newQuantity = (parseInt(this.props.product.quantity) - 1).toString();
        this.setState(() => ({ quantity: newQuantity }));
        // this.props.dispatch(updateQuantity(this.props.product.id, newQuantity));
        this.props.updateQuantity(this.props.product.id, newQuantity);
    }
    incrementQuantity = () => {
        const newQuantity = (parseInt(this.props.product.quantity) + 1).toString();
        this.setState(() => ({ quantity: newQuantity }));
        this.props.updateQuantity(this.props.product.id, newQuantity);

    }

    changeQuantity = (id, e) => {
        const quantity = e.target.value;
        (quantity > 1) ? this.props.updateQuantity(id, quantity) : this.props.updateQuantity(id, "1");
        if (!quantity || quantity.match(/^[1-9]\d*$/)) {
            this.setState(() => ({ quantity: quantity }));
        }
    }
    handleRemove = () => {
        this.props.removeItem(this.props.product.id);
    }

    render() {
        const { id, image, description, quantity, totalCost } = this.props.product;
        return (
            <>
                <div className="item-details">
                    <img src={image} className="item-image" />
                    <div className="text-center">
                        <button
                            disabled={(quantity > 1) ? false : true}
                            onClick={this.decrementQuantity}
                            className="btn-decrement"
                        >-</button>
                        <input className="txtQuantity" type="text" value={this.state.quantity} onChange={(e) => this.changeQuantity(id, e)} />
                        <button
                            onClick={this.incrementQuantity}
                            className="btn-increment"
                        >+</button>
                    </div>
                </div>
                <div className="total-amount">
                    <div>{description}</div>
                    <div>Cost for {quantity} {(quantity > 1) ? 'items' : 'item'} is <b>{totalCost} INR</b></div>
                    <button className="btnRemove" onClick={this.handleRemove}>Remove</button>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, props) => {
    return {
        updateQuantity: (id, newQuantity) => dispatch(updateQuantity(id, newQuantity)),
        removeItem: (id) => dispatch(removeItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);