import PropTypes from 'prop-types';
import React from 'react';

const Child = React.memo(({ name = 'Diya Shamreen', message, count }) => {
  console.log('rendering child');
  return (
    <div>
      <p>{name}</p>

      <p>
        {message} and {count}
      </p>
    </div>
  );
});

Child.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
  count: PropTypes.string,
};

export default Child;
