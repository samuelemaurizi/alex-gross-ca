import React from 'react';
import { Link } from 'react-router-dom';

// PHOSPHOR
import { ArrowCircleRight } from 'phosphor-react';

const HomeScreen = () => {
  return (
    <div className='card'>
      <h1 className='card__title-big'>Welcome to our Survey</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
      <Link to='/username' className='btn btn-next'>
        start the survey
        <ArrowCircleRight size={20} weight='bold' />
      </Link>
    </div>
  );
};

export default HomeScreen;
