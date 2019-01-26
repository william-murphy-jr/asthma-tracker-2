import React from 'react';

const ListItem = ({ item } = props) => {
  return (
    <div>
      { item.comment }
    </div>
  );
};

export default ListItem;
