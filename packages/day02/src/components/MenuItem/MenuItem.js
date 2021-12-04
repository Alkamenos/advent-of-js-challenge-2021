import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';
import check from '../../images/check.svg';

function MenuItem({name, image, price, alt, count, onAdd}) {
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
        import(`../../images/${image}`).then((module) => {
            setImageUrl(module.default);
        });
    }, []);

    const handleAdd = () => {
        onAdd(name);
    };

    return (
        <li className="Menu-Item">
            <img className="Menu-Item__plate" src={imageUrl} alt={alt} />

            <div className="Menu-Item__card">
                <p className="Menu-Item__name">{name}</p>
                <p className="Menu-Item__price">$ {price}</p>
                {count > 0 ? (
                    <button className="Menu-Item__add-button _in-cart">
                        <img src={check} alt="check" /> In cart
                    </button>
                ) : (
                    <button className="Menu-Item__add-button" onClick={handleAdd}>
                        Add to Cart
                    </button>
                )}
            </div>
        </li>
    );
}

MenuItem.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default MenuItem;
