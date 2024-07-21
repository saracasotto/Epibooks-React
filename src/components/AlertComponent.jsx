// AlertComponent.js
import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertComponent = ({ show, variant, message, onClose }) => {
  if (!show) return null;

  return (
    <Alert variant={variant} onClose={onClose} dismissible>
      {message}
    </Alert>
  );
};

export default AlertComponent;
