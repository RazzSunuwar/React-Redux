import React, { Component } from 'react';
import updatedComponent from './withCounter';

class HoverCounter extends Component {
    
    render() {
        const { count, incrementCount } = this.props
        return <h2 onMouseOver={incrementCount}>
        Hovered { count } Times</h2>

    };
};

export default updatedComponent(HoverCounter);
