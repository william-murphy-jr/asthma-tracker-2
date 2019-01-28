import React from 'react';
import ListItem from './ListItem.jsx';
import Header from './Header.jsx';

const List = ({ items, handleChange } = props) => {
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
      <Header />
      {items.map((item, index) => {
        const key = index;
        return (
          <ListItem
            item={item}
            key={key}
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
};

export default List;
