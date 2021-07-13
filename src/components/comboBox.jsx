import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class ComboBox extends Component {

    
    getData = (event) => {
      console.log(event.target.value);
      this.props.getComboBoxVal(event.target.value)
    }


  render() {
      return (
        <>
        <select name="score" className="select-box" onChange={this.getData} id="select-id">
          {/* <option key="1" value="A">A</option>
          <option key="2" value="B">B</option>
          <option key="3" value="C">C</option>
          <option key="4" value="D">D</option> */}
          {
            this.props.dataList && this.props.dataList.map(data => (
              <option key={data.id} value={data.id}>{data.val}</option>
            ))
          }
        </select>
        </>
      );
  }
}

export default ComboBox;

