import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import AccountForm from './components/AccountForm';
import ConfirmationScreen from './components/ConfirmationScreen';
import SuccessScreen from './components/SuccessScreen';
import ErrorScreen from './components/ErrorScreen';
import IFSCLookup from './components/IFSCLookup';
import '../src/assets/fonts.css';
import IFSCTable from './components/IFSCTable';

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<AccountForm />} />
        <Route path="/ifsc" element={<IFSCLookup/>} />
        <Route path="/confirmation" element={<ConfirmationScreen />} />
        <Route path="/success" element={<SuccessScreen />} />
        <Route path="/error" element={<ErrorScreen />} />
        <Route path="/ifsctable" element={<IFSCTable/>} />
      </Routes>
    </Router>
  );
};

export default App;
