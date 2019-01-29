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
      // data: [],
      // items: mockData,
    };
    // this.handleChange = this.handleChange.bind(this);
    this.checkDataFields = this.checkDataFields.bind(this);
    this.renderEditable = this.renderEditable.bind(this);
    this.getData = this.getData.bind(this);
    this.postData = this.postData.bind(this);
    this.calcPeakFlowAvg = this.calcPeakFlowAvg.bind(this);
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
    const data = this.state.data;
    console.log(' check post data NOW!!!: ', data);
    
    if (this.checkDataFields(data)) {
      console.log('data posted NOW!!!: ', data);
      axios.post('/records', data)
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
    } else {
      console.log('All data fields not filled out');
      return;
    }
  }

  checkDataFields(data) {
    console.log('checkDataFields: ', data);
    return false;

  }

  calcPeakFlowAvg(data) {
    // console.log('calc psak flow data: ', data);
    let output = 0;
    let len = 0;

    // for(let i = 0; i < data.length; i++) {
    //   let pkflw = +data[i].peakFlow
    //   console.log('typeoof pkflw: ', typeof pkflw);
    //   console.log('pkflw: ', pkflw);
    //   if(spkflw !== '') {
    //     output += pkflw;
    //     len += 1;
    //   }
    // }

    output = data.reduce((acc, item) => {
      return acc + parseInt(item.peakFlow, 10);
    }, 0);

    console.log('pAve: ', output / this.state.data.length);
    return Math.round(output / this.state.data.length);
  } // calcPeakFlowAvg

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
          this.postData(); // send data back
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
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
