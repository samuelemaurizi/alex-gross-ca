import React from 'react';
import { Link } from 'react-router-dom';

// PHOSPHOR
import { ArrowCircleRight, ArrowLeft } from 'phosphor-react';

const UsernameScreen = () => {
  return (
    <div className='card'>
      <h4 className='card__subtitle'>who are you?</h4>
      <h1 className='card__title'>Please enter your name</h1>

      <input
        id='username'
        type='text'
        placeholder='Full Name'
        name='username'
        required={true}
        // minLength={2}
      />

      <div className='btn-container'>
        <Link to='/step1' className='btn btn-next'>
          next
          <ArrowCircleRight size={20} weight='bold' />
        </Link>
        <Link to='/' className='btn'>
          <ArrowLeft size={20} weight='bold' />
          back
        </Link>
      </div>
    </div>
  );
};

export default UsernameScreen;
