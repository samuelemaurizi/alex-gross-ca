import React, { useEffect, useState } from 'react';

const ProgressBar = ({ currentStep }) => {
  const [stepPercentage, setStepPercentage] = useState(0);

  useEffect(() => {
    if (+currentStep === 1) setStepPercentage(33);
    if (+currentStep === 2) setStepPercentage(66);
    if (+currentStep === 3) setStepPercentage(100);
  }, [currentStep]);

  return (
    <div className='form-step-progress-bar'>
      <div
        className='form-step-progress-bar__fill'
        style={{ width: `${stepPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
