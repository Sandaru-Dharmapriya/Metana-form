import React from 'react';
import './FormPage9.css';
import { useNavigate } from 'react-router-dom';

const FormPageThankYou = () => {

  return (
    <div className="form-container">
      <header className="header">
        <div className="logo">Buildform</div>
      </header>
      <main>
        <h2>Thank you for applying</h2>
        <p>An admissions team member will contact you shortly.</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <button onClick={() => window.location.href = 'https://typeform.com'}>Create a typeform</button>
      </main>
    </div>
  );
}

export default FormPageThankYou;
