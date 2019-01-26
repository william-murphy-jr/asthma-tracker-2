import React from 'react';
import $ from 'jquery';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data,
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

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
