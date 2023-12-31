import React from 'react';
import './App.css';
import { ChildA } from './dayThree/ContextChildComponent';
import ContextComponent from './provider/ContextProvider';
// import Example1 from './dayThree/Example1';
// import NumberGuessingGame from './dayThree/NumberGuessingGame';
// import ClickCounter from './dayTwo/ClickCounter';
// import TodoList from './dayTwo/TodoList';
// import Main from './Main';
// import ClassParent from './Class';
// import Header from './Components/Header/Header';
// import MainContent from './Components/MainContent/MainContent';
// import Footer from './Components/Footer/Footer';
// import Sidenav from './Components/Sidenav/Sidenav';
// import UseStateWithObject from './UseStateWithObject';
// import ClickText from   './dayTwo/ClickText';

const App = () => {
  return (
    <ContextComponent>
    <div className='App'>
      <ChildA/>
      {/* <NumberGuessingGame/> */}
      {/* <h1>hi</h1> */}
    </div>
    </ContextComponent>
  //   <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '20px' }}>
  //     <Header />
  //     <div style={{ display: 'flex', justifyContent: 'space-around', flex: 1, marginTop: '20px', marginBottom: '20px' }}>
  //       <Sidenav />
  //       <MainContent />
  //     </div>
  //     <Footer />
  //   </div>
  );
};

export default App;