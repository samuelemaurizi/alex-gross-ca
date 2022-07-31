import React, { useContext, useState, useEffect } from 'react';

import FormContext from '../context/multistepForm/formContext';

// COMPONENTS
import NextPrevBtns from '../UI/NextPrevBtns';

const Step1Screen = () => {
  const formContext = useContext(FormContext);
  const { userData, setUserData, addScore } = formContext;

  const [active, setActive] = useState(null);
  const [score, setScore] = useState(0);
  const [formData, setFormData] = useState({
    websiteVisits: '',
  });
  const { websiteVisits } = formData;

  useEffect(() => {
    if (userData) {
      setFormData(userData);
    }
  }, [userData]);

  const handleChange = (e) => {
    setActive(+e.target.value);
    setScore(+e.target.value);
    setUserData({ ...formData, [e.target.name]: e.target.id });
  };

  const handleNext = () => {
    setUserData(formData);
    addScore(score);
  };

  return (
    <div className='form-card__content'>
      <h4 className='card__subtitle'>question 1</h4>
      <h1 className='card__title'>How often do you visit this website?</h1>

      <div className='radio-btn__container'>
        <div>
          <input
            type='radio'
            name='websiteVisits'
            value='5'
            id='often'
            checked={active === 5 || websiteVisits === 'often'}
            onChange={handleChange}
          />
          <label htmlFor='often5'>Often</label>
        </div>
        <div>
          <input
            type='radio'
            name='websiteVisits'
            value='3'
            id='rarely'
            checked={active === 3 || websiteVisits === 'rarely'}
            onChange={handleChange}
          />
          <label htmlFor='rarely3'>Rarely</label>
        </div>
        <div>
          <input
            type='radio'
            name='websiteVisits'
            value='0'
            id='never'
            checked={active === 0 || websiteVisits === 'never'}
            onChange={handleChange}
          />
          <label htmlFor='never0'>Never</label>
        </div>
      </div>

      <NextPrevBtns
        handleNext={handleNext}
        nextTo='/step2'
        prevTo='/username'
      />
    </div>
  );
};

export default Step1Screen;
