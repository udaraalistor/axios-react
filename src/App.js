import React from 'react';

import './App.css';
import Test from './components/Test';
import Testinput from './components/Testinput';
import Testdelete from './components/Testdelete';

function App() {
  return (
    <div className="App">
        <Testinput />
        <Testdelete />
      <Test />

    </div>
  );
}

export default App;
