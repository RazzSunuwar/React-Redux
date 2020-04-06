import React, { Component } from 'react';
import LifecycleD from './LifecycleD';

class LifecycleC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Romieo'
        }
        console.log('LifecycleC constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleC getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleC componentDidMount')
    }
    
    shouldComponentUpdate(){
        console.log('LifecycleC shouldComponentUpdate ')
        return null
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleC getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleC componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'ReactJs'
        })
    }
    render() {
        console.log('LifecycleC render')
        return(
            <div>
                <div>Lifecycle C</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleD />
            </div>
        )
    }
}

export default LifecycleC;
