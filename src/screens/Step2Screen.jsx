import React, { useContext, useEffect, useState } from 'react';

import FormContext from '../context/multistepForm/formContext';

// COMPONENTS
import NextPrevBtns from '../UI/NextPrevBtns';

const Step2Screen = () => {
  const formContext = useContext(FormContext);
  const { userData, setUserData, addScore } = formContext;

  const [score, setScore] = useState(0);
  const [formData, setFormData] = useState({
    options: {},
  });
  const { options } = formData;

  useEffect(() => {
    if (userData) {
      setFormData(userData);
    }
  }, [userData]);

  const handleChange = (e) => {
    setScore((prevScore) => (prevScore += +e.target.value));
    setFormData((prevData) => ({
      ...formData,
      options: { ...prevData.options, [e.target.name]: e.target.id },
    }));
  };

  const handleNext = () => {
    setUserData(formData);
    addScore(score);
  };

  return (
    <div className='form-card__content'>
      <h4 className='card__subtitle'>question 2</h4>
      <h1 className='card__title'>Please select at least one option</h1>

      <div className='radio-btn__container'>
        <div>
          <input
            type='checkbox'
            name='option1'
            value='2'
            id='option1'
            onChange={handleChange}
            checked={
              options !== undefined && options.option1 === 'option1'
                ? true
                : false
            }
          />
          <label htmlFor='option-1'>Option 1</label>
        </div>
        <div>
          <input
            type='checkbox'
            name='option2'
            value='2'
            id='option2'
            onChange={handleChange}
            checked={
              options !== undefined && options.option2 === 'option2'
                ? true
                : false
            }
          />
          <label htmlFor='option-2'>Option 2</label>
        </div>
        <div>
          <input
            type='checkbox'
            name='option3'
            value='2'
            id='option3'
            onChange={handleChange}
            checked={
              options !== undefined && options.option3 === 'option3'
                ? true
                : false
            }
          />
          <label htmlFor='option-3'>Option 3</label>
        </div>
      </div>

      <NextPrevBtns handleNext={handleNext} nextTo='/step3' prevTo='/step1' />
    </div>
  );
};

export default Step2Screen;
