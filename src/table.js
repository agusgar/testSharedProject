import React from 'react';
import PropTypes from 'prop-types';

function Table({ rows, title = 'Default title' }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>Amount of rows: {rows.length}</div>
    </div>
  );
}

Table.propTypes = {
  rows: PropTypes.array.isRequired,
  title: PropTypes.string
};

export default Table;
