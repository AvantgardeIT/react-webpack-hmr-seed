import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './cartItem.js';
import Counter from './counter.js';

const order = {
    title: 'Fresh fruits package',
    image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
    initialQty: 3,
    price: 8
};

function App() {

    return (
        <div>
            <Counter />
            <CartItem title={order.title} image={order.image} initialQty={order.initialQty} price={order.price}/>
        </div>);
}

ReactDOM.render(
    <App />,
    document.querySelector('.root')
);
