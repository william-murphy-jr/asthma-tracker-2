import React from 'react';
import RowDataItems from './RowDataItems.jsx';

const ListItem = ({ item } = props) => {
  return (
    <div className="row">
      <RowDataItems item={item} />
    </div>
  );
};

export default ListItem;
