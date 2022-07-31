import React, { useContext, useEffect, useState } from 'react';

import FormContext from '../context/multistepForm/formContext';

// COMPONENTS
import NextPrevBtns from '../UI/NextPrevBtns';

const Step3Screen = () => {
  const formContext = useContext(FormContext);
  const { userData, setUserData, addScore } = formContext;

  const [score, setScore] = useState(0);
  const [formData, setFormData] = useState({
    country: '',
  });
  const { country } = formData;

  useEffect(() => {
    if (userData) {
      setFormData(userData);
    }
  }, [userData]);

  const handleChange = (e) => {
    setFormData({ ...formData, country: e.target.value });

    if (e.target.value === 'germany' || e.target.value === 'spain') {
      setScore(3);
    } else {
      setScore(5);
    }
  };

  const handleNext = () => {
    setUserData(formData);
    addScore(score);
  };

  return (
    <div className='form-card__content'>
      <h4 className='card__subtitle'>question 3</h4>
      <h1 className='card__title'>Where are you from?</h1>

      <select
        name='country'
        value={country || ''}
        onChange={handleChange}
        className='select'
      >
        <option value=''>Please choose your country</option>
        <option value='germnay' id='3'>
          Germany
        </option>
        <option value='sweden' id='5'>
          Sweden
        </option>
        <option value='italy' id='5'>
          Italy
        </option>
        <option value='spain' id='3'>
          Spain
        </option>
      </select>

      <NextPrevBtns handleNext={handleNext} nextTo='/result' prevTo='/step2' />
    </div>
  );
};

export default Step3Screen;
