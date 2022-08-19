import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  return (
    <h2>
      Greeting: { greeting }
    </h2>
  );
};

export default Greeting;
