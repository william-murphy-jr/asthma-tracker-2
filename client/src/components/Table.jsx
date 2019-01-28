import React from 'react';
import $ from 'jquery';
import ReactTable from 'react-table';

// import Table from './Table.jsx';


class Table extends React.Component {
  constructor(props) {
    super(props);

    // this.renderEditable = this.renderEditable.bind(this);
  }

  

  render(props) {
    const { data } = this.props;
    console.log('this.props: ', this.props)
    return (
      <div>
        <ReactTable
          data={this.props.data}
          columns={[
            {
              Header: 'Date',
              accessor: 'date',
              Cell: this.props.renderEditable,
            },
            {
              Header: 'Time',
              accessor: 'time',
              Cell: this.props.renderEditable,
            },
            {
              Header: 'Peak Flow',
              accessor: 'peakFlow',
              Cell: this.props.renderEditable,
            }, {
              Header: 'Comments',
              accessor: 'comment',
              Cell: this.props.renderEditable,
            },
            {
              Header: 'Full Name',
              id: 'full',
              accessor: d =>
                <div
                  dangerouslySetInnerHTML={{
                    __html: d.firstName + ' ' + d.lastName
                  }}
                />
            }
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
}

export default Table;
