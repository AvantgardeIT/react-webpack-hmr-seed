import React, { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(
            this.increment.bind(this),
            1000
        )
    }

    increment() {
        this.setState(({ counter }) => {
            return {counter: counter + 1};
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const { counter } = this.state;

        return (
            <header>
                <div><b>Webpack HMR example:</b></div>
                <div>Webpack is reloading automatically the browser!</div>
                <div>Change the counter inside the Counter.jsx and check it.</div>
                <div>{counter}</div>
            </header>
        );
    }
}

