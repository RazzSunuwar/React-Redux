import React, { Component } from 'react';
import Greet from './components/Greet'
import './App.css';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponet from './components/ParentComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet /> */}
        {/* <Welcome /> */}
        {/* <Hello /> */}

        {/* <Greet name= 'David' nickName='Bad Boy'>
        <p>This is the child props</p>
        </Greet>
        <Greet name= 'Brad' nickName='Fat Man'>
          <button>Action</button>
          </Greet>
        <Greet name= 'Sam' nickName='Don' />

        <Welcome name= 'David' nickName='Bad Boy' /> 
        <Welcome name= 'Brad' nickName='Fat Man' />
        <Welcome  name= 'Sam' nickName='Don' /> */}

        {/* <Message /> */}
        {/* <Counter />  */}

        {/* <Greet name= 'Sam' nickName='Don' /> */}
        {/* <Welcome name= 'David' nickName='Bad Boy' /> */}
        
        {/* <FunctionClick /> */}

        {/* <ClassClick /> */}

        {/* <EventBind /> */}

        <ParentComponet />



      </div>
    );


  }

}

export default App;
