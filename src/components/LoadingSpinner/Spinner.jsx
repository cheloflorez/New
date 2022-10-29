import React from 'react';
import './Spinner.css'

function LoadingSpinner() {
  return (
    <div className="divPadre">
      <div className="divHijo">
        <div className="spinner-border imgSpinner" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner