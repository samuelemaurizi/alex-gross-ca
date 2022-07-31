import React from 'react';
import { Link } from 'react-router-dom';

// PHOSPHOR
import { ArrowCircleRight, ArrowLeft } from 'phosphor-react';

const NextPrevBtns = ({ handleNext, nextTo, prevTo }) => {
  return (
    <div className='btn-container'>
      <Link to={nextTo} className='btn btn-next' onClick={handleNext}>
        next
        <ArrowCircleRight size={20} weight='bold' />
      </Link>
      <Link to={prevTo} className='btn btn-prev'>
        <ArrowLeft size={15} weight='bold' />
        back
      </Link>
    </div>
  );
};

export default NextPrevBtns;
