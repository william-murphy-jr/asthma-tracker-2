import React from 'react';
import $ from 'jquery';
import mockData from './mock-data';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: [],
      items: mockData,
    }
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
    <div>
      <h1>Item List</h1>
      <List items={this.state.items} />
    </div>
    );
  }
}

export default App;
