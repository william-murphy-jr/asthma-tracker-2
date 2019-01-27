import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({ items } = props) => {
  console.log('items: ', items);
  return (
    <div className="card">
      <div className="card-header">
        Featured
      </div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
      <span>  { items.length } </span>
      <span>items. </span>
      {items.map((item, index) => {
        const key = index + 100;
        return <ListItem item={item} key={key} />;
      })}
    </div>
  );
};

export default List;
