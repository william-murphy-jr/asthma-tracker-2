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
    this.handleChange = this.handleChange.bind(this);
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
  handleChange(e) {
    console.log('e.target.id: ', e.target.value);
    this.setState({ records: { [e.target.id]: e.target.value } });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="offset-2 col-8">
            <h1>Asthama Tracker</h1>
            <List
              items={this.state.items}
              records={this.state.records}
              handleChange={this.handleChange}
            />
          </div>

        </div>
    </div>
    );
  }
}

export default App;
