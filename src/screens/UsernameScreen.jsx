import React, { useContext, useState, useEffect } from 'react';

import FormContext from '../context/multistepForm/formContext';

// COMPONENTS
import NextPrevBtns from '../UI/NextPrevBtns';

const UsernameScreen = () => {
  const formContext = useContext(FormContext);
  const { userData, setUserData } = formContext;

  const [formData, setFormData] = useState({
    userName: '',
  });
  const { userName } = formData;

  useEffect(() => {
    if (userData) {
      setFormData(userData);
    }
  }, [userData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setUserData(formData);
  };

  return (
    <div className='card'>
      <h4 className='card__subtitle'>who are you?</h4>
      <h1 className='card__title'>Please enter your name</h1>

      <input
        id='username'
        type='text'
        placeholder={userName || 'Full Name'}
        name='userName'
        autoFocus
        onChange={handleChange}
        className='mt3'
      />

      <NextPrevBtns handleNext={handleNext} nextTo='/step1' prevTo='/' />
    </div>
  );
};

export default UsernameScreen;
