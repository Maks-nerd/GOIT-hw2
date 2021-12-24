// Модули
import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => <h1 className="text">{message}</h1>;
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
