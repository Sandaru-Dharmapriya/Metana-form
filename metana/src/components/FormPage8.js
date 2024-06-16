import React, { useState } from 'react';
import './FormPage8.css';
import { useNavigate } from 'react-router-dom';

const FormPageLinkedIn = () => {
    const [linkedin, setLinkedin] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/form/step8');
  }

  return (
    <div className="form-container">
      <header className="header">
        <div className="logo">Buildform</div>
      </header>
      <main>
        <h2>LinkedIn URL (optional)</h2>
        <p>Here’s a sniper link to make your life easy - <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com</a> (It’ll open in a new tab) 🚀</p>
        <form>
          <input type="text" placeholder="Type your answer here..." />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default FormPageLinkedIn;
