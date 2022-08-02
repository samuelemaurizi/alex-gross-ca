import React, { useContext, useEffect, useState } from 'react';

import FormContext from '../context/multistepForm/formContext';

// COMPONENTS
import NextPrevBtns from '../UI/NextPrevBtns';
import CustomSelect from '../UI/CustomSelect';

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

  const handleChange = (value) => {
    setFormData({ ...formData, country: value });

    if (value === 'germany' || value === 'spain') {
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
      <CustomSelect selectCountry={handleChange} country={country} />
      <NextPrevBtns handleNext={handleNext} nextTo='/result' prevTo='/step2' />
    </div>
  );
};

export default Step3Screen;
