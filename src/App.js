import React from 'react';
import Header from './components/header/components';
import Main from './components/main/components';

import './App.css';

function App() {
  return (
    <div className = 'container'>
       <div className = 'calendar-wrapper'>
         <Header />
         <Main />
       </div>
    </div>
  );
}

export default App;
