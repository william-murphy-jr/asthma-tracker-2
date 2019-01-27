import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({ items } = props) => {
  console.log('items: ', items);
  return (
    <div className="">
      <div className="row">
        <div className="col">
          <h2>Featured</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h5 className="">Special title treatment</h5>
          <p className="">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
      {items.map((item, index) => {
        const key = index + 100;
        return <ListItem item={item} key={key} />;
      })}
    </div>
  );
};

export default List;
