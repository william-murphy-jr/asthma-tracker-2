import React from 'react';
import mockData from './mock-data';
import Table from './Table.jsx';
import Titlebar from './Titlebar.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avgPeakFlow: 0,
      data: [{
        id: '',
        date: '',
        time: '',
        peakFlow: 0,
        comment: '',
      }],
      // data: [],
      // items: mockData,
    };
    // this.handleChange = this.handleChange.bind(this);
    this.renderEditable = this.renderEditable.bind(this);
    this.getData = this.getData.bind(this);
    this.calcPeakFlowAvg = this.calcPeakFlowAvg.bind(this);
  }

  componentWillMount() {
    this.getData();
  }

  getData() {
    axios.get('/data')
      .then((res) => {
        console.log('res: ', res);
        console.log('res.data: ', res.data);
        this.setState({
          data: res.data,
        });
        return res.data;
      })
      .then(() => {
        this.setState({avgPeakFlow: this.calcPeakFlowAvg(this.state.data)});
      })
      .catch((error) => {
        console.log('*** then ***', error);
      });
  }

  calcPeakFlowAvg(data) {
    console.log('calc peak flow data: ', data);
    let output = 0;
    output = data.reduce((acc, item) => {
      return acc + parseInt(item.peakFlow, 10);
    }, 0);

    console.log('pAve: ', output / data.length);
    return Math.round(output / data.length);
  }

  handleChange(e) {
    console.log('e.target.id: ', e.target.value);
    this.setState({ records: { [e.target.id]: e.target.value } });
  }

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
          this.setState({ avgPeakFlow: this.calcPeakFlowAvg(this.state.data) });
          console.log('avgPeakFlow: ', this.calcPeakFlowAvg(this.state.data));
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id],
        }}
      />
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="offset-2 col-8">
            <Titlebar />
            <Table
              data={this.state.data}
              renderEditable={this.renderEditable}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
