import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';
import CartItem from '../CartItem';

Cart.propTypes = {
    items: PropTypes.array.isRequired
};

function Cart({items, add, remove}) {
    const subtotal = items.reduce((acc, item) => item.count * item.price, 0);
    const tax = 0.0975 * subtotal;
    const total = subtotal + tax;
    return (
        <>
            <h1>Your Cart</h1>
            {items.length > 0 ? (
                <ul className="Cart">
                    {items.map((item) => (
                        <CartItem {...item} onAdd={add} onRemove={remove} />
                    ))}
                </ul>
            ) : (
                <p>Your Cart is empty</p>
            )}

            {items.length > 0 && (
                <div className="Cart__total">
                    <ul>
                        <li>
                            <p>Sub-total:</p> ${subtotal.toFixed(2)}
                        </li>
                        <li>
                            <p>Tax:</p> ${tax.toFixed(2)}
                        </li>
                        <li>
                            <p>Total:</p> <span className="__purple">${total.toFixed(2)}</span>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Cart;
