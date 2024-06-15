import React, { useState } from 'react';
import './FormPage.css';

const FormPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${firstName} ${lastName}`);
  }

  return (
    <div className="form-container">
      <header className="header">
        <div className="logo">Buildform</div>
      </header>
      <main>
        <h2>Before we start, what is your name?</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="First name" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Last name" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit">OK</button>
        </form>
      </main>
    </div>
  );
}

export default FormPage;
