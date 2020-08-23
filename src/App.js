import React from 'react';
import Select from './components/Select';
import './App.css';

const val = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']

function App() {
  
  return (
    <div className="App"> 
      <Select values={val} />
    </div>
  )
}
export default App;
