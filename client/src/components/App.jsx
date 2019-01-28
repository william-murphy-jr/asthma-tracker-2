import React from 'react';
import $ from 'jquery';
import mockData from './mock-data';
import List from './List.jsx';

// Import React Table
import ReactTable from 'react-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: {
        id: '',
        date: '',
        time: '',
        peakFlow: 0,
        comment: '',
      },
      // items: [],
      data: mockData,
      // data: [],
      // items: mockData,
    };
    // this.handleChange = this.handleChange.bind(this);
    this.renderEditable = this.renderEditable.bind(this);
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       console.log('data: ', mockData);
  //       this.setState({
  //         items: mockData,
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     },
  //   });
  // }
  // handleChange(e) {
  //   console.log('e.target.id: ', e.target.value);
  //   this.setState({ records: { [e.target.id]: e.target.value } });
  // }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: '#fafafa' }}
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id],
        }}
      />
    );
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: 'Date',
              accessor: 'date',
              Cell: this.renderEditable,
            },
            {
              Header: 'Time',
              accessor: 'time',
              Cell: this.renderEditable,
            },
            {
              Header: 'Peak Flow',
              accessor: 'peakFlow',
              Cell: this.renderEditable,
            }, {
              Header: 'Comments',
              accessor: 'comment',
              Cell: this.renderEditable,
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

export default App;
