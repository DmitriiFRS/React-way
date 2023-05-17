import React from 'react';
import {Routes, Route} from 'react-router-dom';
import  './Main/App.scss';
import './Main/Null.css';
import Invite from './Main/Invite';
import Test from './Main/Test';
import Header from './Main/Header';
import Converter from './/Main/Converter/Converter';
function App({test, currency}) {
  const [question, setQuestion] = React.useState(0);
  return (
    <div className="wrapper">
      <Header />
        <Routes>
          <Route path='/React-way' element={<Test test={test} question={question} setQuestion={setQuestion}/>}/>
          <Route path='/Invite' element={<Invite />}/>
          <Route path='/Currency' element={<Converter currencyNames={currency}/>}/>
        </Routes>
    </div>
  );
}

export default App;
