import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem';
import './Menu.css';

Menu.propTypes = {
    items: PropTypes.array.isRequired
};

function Menu({items, add}) {
    return (
        <>
            <h1>To Go Menu</h1>
            <ul className="Menu">
                {items.map((item) => (
                    <MenuItem {...item} onAdd={add} />
                ))}
            </ul>
        </>
    );
}

export default Menu;
