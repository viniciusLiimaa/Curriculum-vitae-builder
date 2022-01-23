import React from 'react';
import '../src/styles/app.css'
import Section from '../src/components/Section';
import Header from '../src/components/Header';
import Button from '../src/components/Button';
import Main from '../src/components/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main />
    </div>
  );
}

export default App;
