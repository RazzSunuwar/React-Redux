import React, { Component } from 'react';
import updatedComponent from './withCounter'

export class ClickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        };
    };

    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1}
        });
    };
    
    render() {
        const { count } = this.state    
        return <button onClick={this.incrementCount}>
        {this.props.name} Click {count} Times</button>
    };
};

export default updatedComponent(ClickCounter);
