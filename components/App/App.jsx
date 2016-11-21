import React from 'react';
import CartItem from './../CartItem/CartItem.jsx';
import Counter from './../Counter/Counter.jsx';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const order = {
            title: 'Fresh fruits package',
            image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
            initialQty: 3,
            price: 8
        };

        //<CartItem title={order.title} image={order.image} initialQty={order.initialQty} price={order.price}/>

        return (
            <div>
                <Counter />
            </div>
        );
    }

}
