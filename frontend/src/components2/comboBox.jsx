import React, { Component } from 'react';


class ComboBox extends Component {

    
    getData = (event) => {
      //console.log(event.target.value);
      this.props.getComboBoxVal(event.target.value)
    }


  render() {
      return (
        <>
        <select name="score" className="select-box" onChange={this.getData} id="select-id">
          <option></option>
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

