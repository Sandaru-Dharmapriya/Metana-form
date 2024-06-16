import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormPage.css';

const FormPage3 = () => {
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    sessionStorage.setItem('country', country);
    navigate('/form/step3');
  };

  return (
    <div className="form-container">
      <div className="form-step">
        <h2>Which country are you from? 🏡</h2>
        <select className="selection" value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="" disabled>Select your country</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="China">China</option>
          <option value="Canada">Canada</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="Australia">Australia</option>
          <option value="Andorra">Andorra</option>
        </select>
        <button type="button" onClick={handleSubmit}>
          OK
        </button>
      </div>
    </div>
  );
};

export default FormPage3;
