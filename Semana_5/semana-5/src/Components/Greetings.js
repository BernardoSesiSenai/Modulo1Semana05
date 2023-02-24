import React from 'react';
import PropTypes from 'prop-types';

function Greeting(props) {
  return (
    <div>Exemplo utilizando PropTypes:
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old.</p>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default Greeting;
