import React, {useState} from 'react';
import './eCommerce.css';
import MenuLayout from './layout/MenuLayout';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart';

const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 2.23,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 2
    },
    {
        name: 'Salmon and Vegetables',
        price: 5.12,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 7.82,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 5.99,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 6.98,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 6.34,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0
    }
];

function ECommerce() {
    const [items, setItems] = useState(menuItems);

    const add = (name) => {
        const item = items.find((item) => item.name === name);
        if (item) {
            item.count++;
        }
        setItems([...items]);
    };

    const remove = (name) => {
        const item = items.find((item) => item.name === name);
        if (item && item.count > 0) {
            item.count--;
        }
        setItems([...items]);
    };

    return (
        <div className="eCommerce-App">
            <MenuLayout>
                <Menu items={items} add={add} />
            </MenuLayout>
            <MenuLayout>
                <Cart items={items.filter((item) => item.count > 0)} add={add} remove={remove} />
            </MenuLayout>
        </div>
    );
}

ECommerce.propTypes = {};

ECommerce.defaultProps = {};

export default ECommerce;
