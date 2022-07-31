import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import FormContext from '../context/multistepForm/formContext';

const ResultScreen = () => {
  const formContext = useContext(FormContext);
  const { userData, score, deleteUserData } = formContext;

  const [formData, setFormData] = useState({});
  const { userName } = formData;

  useEffect(() => {
    if (userData) {
      setFormData(userData);
    }
  }, [userData]);

  const handleRestart = () => {
    deleteUserData();
  };

  return (
    <div className='card'>
      <h4 className='card__subtitle'>result</h4>
      <h1 className='card__title'>Your Score</h1>
      <h2>{userName !== undefined ? userName : 'undefined'}</h2>
      <h1>{Math.floor(score / 0.16)}</h1>
      <h5>Points</h5>

      <div className='points-bar'>
        <div
          className='points-bar__fill'
          style={{ width: `${Math.floor(score / 0.16)}%` }}
        ></div>
      </div>

      <Link to='/username' className='btn btn-next' onClick={handleRestart}>
        start new
      </Link>
    </div>
  );
};

export default ResultScreen;
