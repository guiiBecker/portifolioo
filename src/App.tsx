import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/button';
import Header from './components/header';
import Text from './components/text';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Text></Text>
        <MyButton />
  
    </div>
  );
}

export default App;
