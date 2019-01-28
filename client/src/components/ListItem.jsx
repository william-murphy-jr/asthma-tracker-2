import React from 'react';
// import RowDataItems from './RowDataItems.jsx';

const ListItem = ({ item, index, handleChange } = props) => {
  return (
    <tr className="row data-row" >
      <th scope="row">{item.idx}</th>
      {/* <td> */}
        {item.date}
        {/* <input id="data" className="date" type="text" defaultValue={item.date} onChange={handleChange} /> */}
      {/* </td> */}
      <td>
        {item.time}
        {/* <input id="time" className="" type="text" defaultValue={item.time} onChange={handleChange} /> */}
      </td>
      <td>
        {item.peakFlow}
        {/* <input id="peakFlow" className="" type="text" defaultValue={item.peakFlow} onChange={handleChange} /> */}
      </td>
      <td>
        {item.comment}
        {/* <input id="comment" className="" type="text" defaultValue={item.comment} onChange={handleChange} /> */}
      </td>
    </tr>
  );
};

export default ListItem;
