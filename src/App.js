import React, { useState } from 'react';
import Header from './components/header/components';
import Main from './components/main/components';

import './App.css';

function App() {

const [date, setDate] =  useState(new Date());
const [year, setYear] = useState(date.getFullYear());
const [month, setMonth] = useState(date.getMonth());

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
