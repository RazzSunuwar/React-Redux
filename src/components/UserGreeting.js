import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    };
    
    render() {
        if(this.state.isLoggedIn){
            return <div>WEL COME MAN!</div>
        } else {
            return <div>WEL COME GUEST!</div>
        }
        // return (
        //     <div>
        //         <div>WEL COME MAN!</div>
        //         <div>WEL COME GUEST!</div>
        //     </div>
        // )
    }
};

export default UserGreeting;
