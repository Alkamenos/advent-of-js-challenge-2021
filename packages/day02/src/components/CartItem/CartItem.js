import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './CartItem.css';
import chevron from '../../images/chevron.svg';

function CartItem({name, image, price, alt, count, onAdd, onRemove}) {
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
        import(`../../images/${image}`).then((module) => {
            setImageUrl(module.default);
        });
    }, []);

    const handleAdd = () => {
        onAdd(name);
    };

    const handleRemove = () => {
        onRemove(name);
    };

    const sum = (price * count).toFixed(2);
    return (
        <li className="Cart-Item">
            <div className="Cart-Item__plate">
                <img src={imageUrl} alt={alt} />
                <div className="Cart-Item__plate-quantity">{count}</div>
            </div>
            <div className="Cart-Item__card">
                <p className="Cart-Item__name">{name}</p>
                <p className="Cart-Item__price">$ {price}</p>

                <div className="Cart-Item__controls">
                    <div className="Cart-Item__buttons">
                        <button className="Cart-Item__dec-button" onClick={handleRemove}>
                            <img src={chevron} alt="dec" />
                        </button>
                        <p className="Cart-Item__count">{count}</p>
                        <button className="Cart-Item__inc-button" onClick={handleAdd}>
                            <img src={chevron} alt="inc" />
                        </button>
                    </div>
                    <p className="Cart-Item__sum">$ {sum}</p>
                </div>
            </div>
        </li>
    );
}

CartItem.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default CartItem;
