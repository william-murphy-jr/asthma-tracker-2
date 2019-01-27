import React from 'react';
import RowDataItems from './RowDataItems.jsx';

const ListItem = ({ item, handleChange } = props) => {
  return (
    <div className="row">
      <RowDataItems
        item={item}
        handleChange={handleChange}
      />
    </div>
  );
};

export default ListItem;
