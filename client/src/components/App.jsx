import React from 'react';
import mockData from './_mock-data';
import Table from './Table.jsx';
import DisplayPeakFlow from './DisplayPeakFlow.jsx';
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
        peakFlow: '',
        comment: '',
      }],
    };

    this.cleanDataFields = this.cleanDataFields.bind(this);
    this.renderEditable = this.renderEditable.bind(this);
    this.getData = this.getData.bind(this);
    this.postData = this.postData.bind(this);
    this.calcPeakFlowAvg = this.calcPeakFlowAvg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.getData();
  }

  getData() {
    axios.get('/records')
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
  
  postData() {
    let data = this.state.data.slice();
    console.log(' check post data NOW!!!: ', data);
    
    const cleanData = (this.cleanDataFields(data));
    
    console.log('We just posted this data to the SERVER!!!: ', cleanData);
    axios.post('/records', cleanData)
      .then((res) => {
        console.log('res: ', res);
        console.log('res.data: ', res.data);
        // this.setState({
        //   data: res.data,
        // });
        return res.data;
      })
      .catch((error) => {
        console.log('*** Error ***', error);
      });
  }

  cleanDataFields(data) {
    console.log('cleanDataFields: ', data);
    console.log('cleanDataFields check the last row: ', data[data.length - 1]);

    for (let i = 0; i < data.length; i++) {
      if (data.date !== '' &&
        data.time !== '' &&
        data.peakFlow !== '' && data.comment !== '') {
          data.pop();
          return data;
      } else {
        return data;
      }
    }

    const tmpData = data[data.length - 1];
    if (tmpData.date !== '' &&
      tmpData.time !== '' &&
      tmpData.peakFlow !== '' && tmpData.comment !== '') {
      return true;
    } else {
      return false;
    }
  }

  calcPeakFlowAvg(data) {
    let output = 0; 
    let len = 0;
    
    // Remove the last element of the array. It should be a filled with
    // all empty quotes ('') so we do not want to include this in our calcs.
    const tempData = data.slice(0, data.length - 1);

    output = tempData.reduce((acc, item) => {
      return acc + parseInt(item.peakFlow, 10);
    }, 0);

    console.log('pAve: ', output / tempData.length);
    return Math.round(output / tempData.length);
  } // 
  
  onSubmit() {
    console.log('submit btn clicked');
    this.postData(); // send data back
  }

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
          this.setState({ avgPeakFlow: this.calcPeakFlowAvg(this.state.data) });
          console.log('data from innetHtml: ', data);
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
            <DisplayPeakFlow
              avgPeakFlow={this.state.avgPeakFlow}
            />
            <Table
              data={this.state.data}
              renderEditable={this.renderEditable}
              onSubmit={this.onSubmit}
            />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
