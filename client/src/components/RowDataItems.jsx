import React from 'react';

const RowDataItems = ({ item } = props) => {
  return (
    <div className="col">
      <div className="input-group">
        <input id="data" className="date" type="text" value={item.date} />
        <input id="time" className="" type="text" value={item.time} />
        <input id="peakFlow" className="" type="text" value={item.peakFlow} />
        <input id="comment" className="" type="text" value={item.comment} />
      </div>
    </div>
  );
};

export default RowDataItems;
