import React from 'react';

const DisplayPeakFlow = ({ avgPeakFlow }) => {
  return (
    <div className="peak-flow-display">
      <h3>
        Your average Peak Flow is
        &nbsp;<span className="peak-flow-reading">{ avgPeakFlow }</span>
      </h3>
    </div>
  );
};

export default DisplayPeakFlow;
