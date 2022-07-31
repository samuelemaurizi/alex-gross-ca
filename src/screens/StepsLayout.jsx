import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import FormContext from '../context/multistepForm/formContext';
import { useLocation } from 'react-router-dom';

// COMPONENTS
import ProgressBar from '../UI/ProgressBar';

const StepsLayout = () => {
  let location = useLocation();

  const formContext = useContext(FormContext);
  const { userData, totalStep } = formContext;

  const [currentStep, setCurrentStep] = useState(1);
  const [userName, setUsername] = useState('');

  // @DESC  Set current step
  useEffect(() => {
    setCurrentStep(location.pathname.replace(/\D/g, ''));
  }, [location]);

  // @DESC  if userData in context set form with that data
  useEffect(() => {
    if (userData) {
      setUsername(userData.userName);
    }
  }, [userData]);

  return (
    <div className='form-card__container'>
      <div className='form-card__header'>
        <p>survey for: {userName}</p>
      </div>

      <Outlet />

      <div className='form-card__footer'>
        <p>
          question {currentStep} out of {totalStep}
        </p>
        <ProgressBar currentStep={currentStep} />
      </div>
    </div>
  );
};

export default StepsLayout;
