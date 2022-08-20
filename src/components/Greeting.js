import React from 'react';
import PropTypes from 'prop-types';

function Greeting(props) {
  return (
    <div>
      <h1>Receive greetings from the API</h1>
      {props.greetings.map((greeting) => {
        return (
          <div key={greeting.id}>
            <h2>{greeting.message}</h2>
          </div>
        );
      })}
    </div>
  );
}

Greeting.propTypes = {
  greetings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  })).isRequired,
};

export default Greeting;
