import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../components/CartItem';

class Cart extends React.Component {

    render() {
        let totalAmount = 0;
        for (var i = 0; i < this.props.products.length; i++) {
            totalAmount += parseInt(this.props.products[i].totalCost);
        }
        return (
            <div className="cart-wrapper">
                <div className="product-details">
                    <div className="cart-header">My Cart</div>
                    {
                        this.props.products.map(product =>
                            (
                                <div key={product.id} className="product-in-cart">
                                    <CartItem product={product} />
                                </div>
                            )
                        )
                    }
                </div>
                <div className="price-details">
                    <b>Total Amount:{totalAmount} INR</b>
                </div>


            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state
});

export default connect(mapStateToProps)(Cart);