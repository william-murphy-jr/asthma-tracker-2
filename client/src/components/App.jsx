import React from 'react';
import $ from 'jquery';
import mockData from './mock-data';
import List from './List.jsx';
import Table from './Table.jsx';

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
          console.log('data: ', data);
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id],
        }}
      />
    );
  }

  render() {
    return (
      <Table
        data={this.state.data}
        renderEditable={this.renderEditable}
      />
    );
  }
}

export default App;
