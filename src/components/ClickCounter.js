import React, { Component } from 'react';
import updatedComponent from './withCounter'

export class ClickCounter extends Component {

    render() {
        const { count, incrementCount } = this.props   
        return (
            <button onClick={incrementCount}>
                Click {count} Times
            </button>
        )
    };
};

export default updatedComponent(ClickCounter);
