// src/components/FormPage4.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormPage.css';

const FormPage4 = () => {
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Save phone number to session storage or state management
    sessionStorage.setItem('phone', phone);
    sessionStorage.setItem('countryCode', countryCode);
    navigate('/form/step4');
  };

  return (
    <div className="form-container">
      <div className="form-step">
        <h2>What is your phone number?</h2>
        <div className="phone-input">
          <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+86">🇨🇳 +86</option>
            <option value="+1">🇨🇦 +1</option>
            <option value="+971">🇦🇪 +971</option>
            <option value="+61">🇦🇺 +61</option>
            <option value="+376">🇦🇩 +376</option>
          </select>
          <input
            type="text"
            placeholder="551 23 45 67"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          OK
        </button>
      </div>
    </div>
  );
};

export default FormPage4;
