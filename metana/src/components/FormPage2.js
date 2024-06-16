import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormPage2.css';

const FormPage2 = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    sessionStorage.setItem('email', email);
    navigate('/form/step2');
  };

  return (
    <div className="form-container">
      <div className="form-step">
        <h2>What's your email address?</h2>
        <p>This is how we'll contact you.</p>
        <input
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          OK
        </button>
      </div>
    </div>
  );
};

export default FormPage2;
