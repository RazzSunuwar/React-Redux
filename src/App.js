import React, { Component, Fragment } from 'react';
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
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/Stylesheet';
import Inline from './components/Inline';
import Forms from './components/Forms';
import LifecycleA from './components/LifecycleA';
import LifecycleC from './components/LifecycleC';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './PureComp';
import ParentComp from './ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParent from './components/FRParent';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
// import './AppStyle.css';
// import styles from './AppStyle.module.css';

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

        {/* <ParentComponet /> */}

        {/* <UserGreeting /> */}

        {/* <NameList /> */}

        {/* <StyleSheet primary = {true} /> */}

        {/* <Inline /> */}

        {/* CSS Modules */}
        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}

        {/* <Forms /> */}
        
        {/* <LifecycleA /> */}

        {/* <LifecycleC /> */}

        {/* <FragmentDemo /> */}

        {/* <Table /> */}

        {/* <ParentComp /> */}

        {/* <RefsDemo /> */}

        {/* <FocusInput /> */}

        {/* <FRParent /> */}

        {/* < PortalDemo /> */}

        {/* <ErrorBoundary>
          <Hero heroName='Batman' />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName='Superman' />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName='Joker' />
        </ErrorBoundary> */}
        

        <ClickCounter />
        <HoverCounter />


      </div>
    );

  }

}

export default App;
