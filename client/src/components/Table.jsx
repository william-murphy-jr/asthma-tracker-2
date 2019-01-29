import React from 'react';
import $ from 'jquery';
import ReactTable from 'react-table';


const Table = (props) => {
  const holder = { id: "", date: "", time: "", peakFlow: '', comment: "" };
  const tmpData = props.data;
  if ( tmpData[tmpData.length - 1].peakFlow !== '' &&
    tmpData[tmpData.length - 1].date !== '') {
    props.data.push(holder);
  }
  // console.log('what do we need props: ', props.data.push(holder));

  const { data } = props;
  console.log('what do we need props: ', props.data);
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
          },
          {
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
