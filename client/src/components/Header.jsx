import React from 'react';

const Header = (a) => {
  return (
    <div className="row">
      <div className="col">
        <div id="header" className="input-group header">
          <span id='hdr-data'>Date</span><span id='hdr-time'>Time</span><span id='hdr-peakFlow'>Peak Flow</span><span id='hdr-comment'>Comments</span>
        </div>
      </div>
    </div>
  );
};

export default Header;