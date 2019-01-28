import React from 'react';
import ListItem from './ListItem.jsx';
import Header from './Header.jsx';

// Import React Table
import ReactTable from "react-table";
// import "react-table/react-table.css";



const List = ({ items, handleChange } = props) => {
  console.log('items: ', items);
  const data = items;
  return (
    <ReactTable
      data={data}
      columns={[
        {
          Header: "Daily Data",
          columns: [
            {
              Header: "Date",
              accessor: "date"
            },
            {
              Header: "Time",
              accessor: "time"
            },
            {
              Header: "Peak Flow",
              accessor: "peakFlow"
            },
            {
              Header: "Comments",
              accessor: "comment"
            }
          ]
        },
        {
          Header: "Info",
          columns: [
            {
              Header: "Age",
              accessor: "age"
            }
          ]
        }
      ]}
      defaultSorted={[
        {
          id: "age",
          desc: true
        }
      ]}
      defaultPageSize={10}
      className="-striped -highlight"
    />


  );
};

export default List;
