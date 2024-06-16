import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormPage5.css';

const FormPage5 = () => {
  const [experience, setExperience] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/form/step2');
  }

  return (
    <div className="form-container">
      <header className="header">
        <div className="logo">Buildform</div>
      </header>
      <main>
        <h2>How would you describe your current level of coding experience?</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="radio" name="experience" value="no_experience" onChange={(e) => setExperience(e.target.value)} /> No experience (I have never programmed before.)
          </label>
          <label>
            <input type="radio" name="experience" value="beginner" onChange={(e) => setExperience(e.target.value)} /> Beginner (I have played with some introductory coding lessons and tutorials.)
          </label>
          <label>
            <input type="radio" name="experience" value="intermediate" onChange={(e) => setExperience(e.target.value)} /> Intermediate (I have completed some coding classes or tutorials.)
          </label>
          <label>
            <input type="radio" name="experience" value="advanced" onChange={(e) => setExperience(e.target.value)} /> Advanced (I can build applications.)
          </label>
          <label>
            <input type="radio" name="experience" value="professional" onChange={(e) => setExperience(e.target.value)} /> Professional (I am an experienced software engineer.)
          </label>
          <button type="submit">OK</button>
        </form>
      </main>
    </div>
  );
}

export default FormPage5;
