import React from 'react';

import './CustomSelect.css';

const CustomSelect = ({ selectCountry, country }) => {
  const handleChange = (e) => {
    selectCountry(e.target.textContent);
  };

  return (
    <details className='custom-select'>
      <summary className='radios'>
        <input
          className='radio-select'
          type='radio'
          name='item'
          id='default'
          title={country || 'Please choose your country'}
          // checked
          defaultChecked
        />
        <input
          className='radio-select'
          type='radio'
          name='item'
          id='germany'
          title='Germany'
        />
        <input
          className='radio-select'
          type='radio'
          name='item'
          id='sweden'
          title='Sweden'
        />
        <input
          className='radio-select'
          type='radio'
          name='item'
          id='italy'
          title='Italy'
        />
        <input
          className='radio-select'
          type='radio'
          name='item'
          id='spain'
          title='Spain'
        />
      </summary>
      <ul className='list' onClick={handleChange}>
        <li>
          <label htmlFor='germany'>Germany</label>
        </li>
        <li>
          <label htmlFor='sweden'>Sweden</label>
        </li>
        <li>
          <label htmlFor='italy'>Italy</label>
        </li>
        <li>
          <label htmlFor='spain'>Spain</label>
        </li>
      </ul>
    </details>
  );
};

export default CustomSelect;
