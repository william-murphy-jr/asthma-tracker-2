import React from 'react';
import $ from 'jquery';
import mockData from './mock-data';
import List from './List.jsx';

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
      items: mockData,
    };
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

  render() {
    return (
    <div className="container-fluid">
      <h1>Asthama Tracker</h1>
      <List
        items={this.state.items}
        records={this.state.records}
      />
    </div>
    );
  }
}

export default App;
