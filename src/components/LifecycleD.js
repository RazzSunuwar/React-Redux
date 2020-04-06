import React, { Component } from 'react';

class LifecycleD extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Romieo'
        }
        console.log('LifecycleD constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleD getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleD componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleD shouldComponentUpdate ')
        return null
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleD getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleD componentDidUpdate')
    }
    
    render() {

        console.log('LifecycleD render')
        return <div>Lifecycle D</div>       
    }
}

export default LifecycleD;
