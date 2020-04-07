import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './UserContext';

class ComponentE extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
                Component E Component {this.context}
                <ComponentF />
            </div>
        )
    }
}

// ComponentE.contextType = UserContext     Same as static

export default ComponentE


// Limitation
// Only work on the class component
// Only suscribe to a single context using contexType
