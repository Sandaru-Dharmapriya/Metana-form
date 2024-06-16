import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormPage7.css';

const FormPage7 = () => {
  const [certify, setCertify] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/form/step7');
  }

  return (
    <div className="form-container">
      <header className="header">
        <div className="logo">Buildform</div>
      </header>
      <main>
        <h2>Certifying Statement</h2>
        <p>
          I hereby acknowledge that this application form was completed by me (the individual seeking to enroll in Metana) and I did not receive help from any external sources. The responses submitted are entirely my own and based on my own reasoning. Also, I opt in to receive communication messages from Metana about my application.
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="radio" name="certify" value="accept" onChange={(e) => setCertify(e.target.value)} /> I accept
          </label>
          <label>
            <input type="radio" name="certify" value="dont_accept" onChange={(e) => setCertify(e.target.value)} /> I don't accept
          </label>
          <button type="submit">OK</button>
        </form>
      </main>
    </div>
  );
}

export default FormPage7;
