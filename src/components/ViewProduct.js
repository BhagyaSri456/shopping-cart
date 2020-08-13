import React from 'react';
import { connect } from 'react-redux';
import products from '../productsData.json';
import { addItemToCart } from '../actions/cart';

class ViewProduct extends React.Component {
    state = {
        addedToCart: false
    }
    goToCart = () => {
        this.props.history.push('/cart');
    }
    addToCart = () => {
        const item = products.find((product) => product.id === this.props.match.params.id);
        this.props.addItemToCart(item);
        this.setState(() => ({ addedToCart: true })
        );
    }
    render() {
        const productId = this.props.match.params.id;
        const { image, description, cost } = products.find((product) => product.id === productId);

        return (
            <div className="view-product">
                <div className="flex-wrapper">
                    <img src={require('../images/' + image)} alt={description}></img>
                    <div className="details-wrapper">
                        <div>{description}</div>
                        <div><b>{cost} INR </b></div>
                    </div>
                </div>
                <button
                    onClick={this.props.inCart ? this.goToCart : this.addToCart}
                    className="btnAdd"
                >
                    {this.props.inCart ? ('Go to Cart') : ('Add to Cart')}
                </button>
                {this.state.addedToCart && <div className="success-msg">Item added to cart Succesfully!</div>}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        inCart: !!state.find(product => product.id === props.match.params.id) ? true : false
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (item) => dispatch(addItemToCart(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);