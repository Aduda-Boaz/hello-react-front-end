import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../redux/greeting/greeting';

function Greeting() {
  const { greeting } = useSelector((state) => state.greeting.greeting);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(fetchGreetings());
  }
  return (
    <div>
      <h1>
        Greeting:
        {greeting}
      </h1>
      <button type="button" onClick={handleClick}>
        Fetch Greetings
      </button>
    </div>
  );
}

export default Greeting;
