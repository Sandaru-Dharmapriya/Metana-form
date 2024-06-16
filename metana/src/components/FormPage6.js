import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormPage6.css';

const FormPage6 = () => {
  const [salary, setSalary] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/form/step6');
  }

  return (
    <div className="form-container">
      <header className="header">
        <div className="logo">Buildform</div>
      </header>
      <main>
        <h2>What is your current annual compensation? (Optional)</h2>
        <p>Disclaimer: The information provided regarding salary will be kept confidential and will not be used as a determining factor for acceptance into the bootcamp. It will be used exclusively for career advancement guidance.</p>
        <form onSubmit={handleSubmit}>
          <label className='radio'>
            <input type="radio" name="salary" value="<30000" onChange={(e) => setSalary(e.target.value)} /> &lt;$30,000
          </label>
          <label>
            <input type="radio" name="salary" value="30000-50000" onChange={(e) => setSalary(e.target.value)} /> $30,000 - $50,000
          </label>
          <label>
            <input type="radio" name="salary" value="50000-80000" onChange={(e) => setSalary(e.target.value)} /> $50,000 - $80,000
          </label>
          <label>
            <input type="radio" name="salary" value="80000-120000" onChange={(e) => setSalary(e.target.value)} /> $80,000 - $120,000
          </label>
          <label>
            <input type="radio" name="salary" value="120000-250000" onChange={(e) => setSalary(e.target.value)} /> $120,000 - $250,000
          </label>
          <label>
            <input type="radio" name="salary" value=">250000" onChange={(e) => setSalary(e.target.value)} /> $250,000 or more
          </label>
          <button type="submit">OK</button>
        </form>
      </main>
    </div>
  );
}

export default FormPage6;
