import React from 'react';
import '../src/styles/app.css'
import Section from '../src/components/Section';
import Header from '../src/components/Header';
import Button from '../src/components/Button';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section title="GENERAL INFORMATION" fildNames={["Name","Email","Phone Number"]} btnId="update-general"/>
      <Section title="EDUCATIONAL EXPERIENCE" fildNames={["School name", "Title of Study", "Date of Study"]} btnId="update-educational"/>
      <Section title="PRACTICAL EXPERIENCE" fildNames={["Company name","Position title","Main tasks", "Start Date", "End date"]} btnId="update-practical"/>
      <Button name='Preview your CV' id="preview-btn"/>

    </div>
  );
}

export default App;
