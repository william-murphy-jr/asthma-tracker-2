import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({ items } = props ) => {
  console.log('items: ', items);
  return (
    <div>
      <h4> List Component </h4>
      There are
      { items.length }
      items.
      { items.map((item, index) => {
        const key = index + 100;
        return <ListItem item={item} key={key} />;
      })}
    </div>
  );
};

export default List;