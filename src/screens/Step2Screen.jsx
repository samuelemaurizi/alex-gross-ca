import React, { useContext, useEffect, useState } from 'react';

import FormContext from '../context/multistepForm/formContext';

// COMPONENTS
import NextPrevBtns from '../UI/NextPrevBtns';

const Step2Screen = () => {
  const formContext = useContext(FormContext);
  const { userData, setUserData, addScore } = formContext;

  const [score, setScore] = useState(0);
  const [formData, setFormData] = useState({});
  const [checkboxesChecked, setCheckboxesChecked] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  useEffect(() => {
    if (userData) {
      setFormData(userData);
      if (userData.options) {
        setCheckboxesChecked(userData.options);
      }
    }
  }, [userData]);

  const handleChange = (e) => {
    setCheckboxesChecked({
      ...checkboxesChecked,
      [e.target.name]: e.target.checked,
    });

    if (e.currentTarget.checked) {
      setScore((prevScore) => (prevScore += +e.target.value));
      setFormData((prevData) => ({
        ...formData,
        options: { ...prevData.options, [e.target.name]: e.target.id },
      }));
    } else {
      setScore((prevScore) => (prevScore -= +e.target.value));

      const copy = { ...formData };
      delete copy.options[e.target.name];

      setFormData(copy);
    }
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
          <label className='form-control'>
            <input
              type='checkbox'
              name='option1'
              value='2'
              id='option1'
              onChange={handleChange}
              checked={checkboxesChecked.option1 || false}
            />
            Option 1
          </label>
        </div>
        <div>
          <label className='form-control'>
            <input
              type='checkbox'
              name='option2'
              value='2'
              id='option2'
              onChange={handleChange}
              checked={checkboxesChecked.option2 || false}
            />
            Option 2
          </label>
        </div>
        <div>
          <label className='form-control'>
            <input
              type='checkbox'
              name='option3'
              value='2'
              id='option3'
              onChange={handleChange}
              checked={checkboxesChecked.option3 || false}
            />
            Option 3
          </label>
        </div>
      </div>

      <NextPrevBtns handleNext={handleNext} nextTo='/step3' prevTo='/step1' />
    </div>
  );
};

export default Step2Screen;
