import React from 'react';
import { Spinner } from 'react-bootstrap';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  size?: 'sm' | undefined;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ fullScreen, size }) => {
  if (fullScreen) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="text-center py-3">
      <Spinner animation="border" role="status" variant="primary" size={size}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default LoadingSpinner;