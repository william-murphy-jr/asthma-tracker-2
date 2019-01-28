import React from 'react';
import $ from 'jquery';
import ReactTable from 'react-table';


const Table = (props) => {
  const { data } = props;
  // console.log('props: ', props);
  return (
    <div>
      <ReactTable
        data={props.data}
        columns={[
          {
            Header: 'Date',
            accessor: 'date',
            width: 100,
            'padding-left': '16px',
            Cell: props.renderEditable,
          },
          {
            Header: 'Time',
            accessor: 'time',
            width: 100,
            'padding-left': '16px',
            Cell: props.renderEditable,
          },
          {
            Header: 'Peak Flow',
            accessor: 'peakFlow',
            width: 100,
            'padding-left': '16px',
            Cell: props.renderEditable,
          }, {
            Header: 'Comments',
            accessor: 'comment',
            width: 600,
            Cell: props.renderEditable,
          },
        ]}
        defaultPageSize={10}
        className='-striped -highlight'
      />
      <br />
      {/* <Tips />
      <Logo /> */}
    </div>
  );
}

export default Table;
