import React from 'react';

const Footer = ({ onSubmit }) => {
  return (
    <div className="table-footer">
      <button className="table-submit-btn" onClick={onSubmit} >Submit</button>
    </div>
  );
}

export default Footer;