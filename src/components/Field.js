// Dependencies
import React from 'react';
import PropTypes from 'prop-types'; // ES6


// Stateless component / Functional component
const Field = (props) => (
  <div>
    <input
		  placeholder={props.label}
      onChange={props.onChange}
      value={props.value}
    />
  </div>
);

// PropTypes is a way to ensure we are expecting
// certain props that will enable the component to
// function properly.
Field.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Field.defaultProps = {
  textarea: false,
};

export default Field;