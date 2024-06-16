// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import FormPage from './components/FormPage';
import FormPage2 from './components/FormPage2';
import FormPage3 from './components/FormPage3';
import FormPage4 from './components/FormPage4';
import FormPage5 from './components/FormPage5';
import FormPage6 from './components/FormPage6';
import FormPage7 from './components/FormPage7';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/form/step1" element={<FormPage2 />} />
          <Route path="/form/step2" element={<FormPage3 />} />
          <Route path="/form/step3" element={<FormPage4 />} />
          <Route path="/form/step4" element={<FormPage5 />} />
          <Route path="/form/step5" element={<FormPage6 />} />
          <Route path="/form/step6" element={<FormPage7 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
