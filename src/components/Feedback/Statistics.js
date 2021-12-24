// Модули
import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <ul className="list-statistics">
      <li className="item-statistics">Good: {good}</li>
      <li className="item-statistics">Neutral: {neutral}</li>
      <li className="item-statistics">Bad: {bad}</li>
      <li className="item-statistics">Total: {total}</li>
      <li className="item-statistics">
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
