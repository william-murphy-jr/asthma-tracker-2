import React from 'react';

const ListItem = ({ item } = props) => {
  return (
    <div className="card-body">
      <p className="card-text">{ item.comment }</p>
    </div>
  );
};

export default ListItem;
