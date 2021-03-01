import React, { Component } from "react";
import CounterItem from "./counterItem.js";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };

    render() {

        return (
            <div class="counter">
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Like Article
                </button>
                <CounterItem count={this.state.count} />
            </div>
        );
    }
}

export default Counter;