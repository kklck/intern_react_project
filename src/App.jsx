
import './App.css';
import React, { Component } from 'react';
import ComboBox from './components/comboBox';
import Grid from './components/grid';
import RadioButton from './components/radioButton';
import TextBox from './components/textBox';

class App extends Component {

  state = {
    comboBoxVal : "",
    radioBtnVal : "",
    textBoxVal : "",
    bankId: "",
    insurance: [],
    bankList : [
      {id:'km',val:'국민은행'},
      {id:'wr',val:'우리은행'},
      {id:'sh',val:'신한은행'},
      {id:'hn',val:'하나은행'},
    ],
    kmInsuranceList : [
      {id:'1',val:'무배당 암걱정없는표적치료암보험(갱신형) 실속형'},
      {id:'2',val:'무배당 암걱정없는표적치료암보험(갱신형) 프리미엄형'},
    ],
    wrInsuranceList : [
      {id:'1',val:'무배당 라이나THE치아보험_보존강화형'},
      {id:'2',val:'무배당 라이나THE치아보험_보철강화형'},
    ],
    shInsuranceList : [
      {id:'1',val:'무배당 라이나간병플러스치매보험1종(페이퍼형) 분할지급'},
      {id:'2',val:'무배당 라이나간병플러스치매보험1종(페이퍼형) 일시지급'},
    ],
    hnInsuranceList : [
      {id:'1',val:'무배당 라이나간병플러스치매보험2종(순수보장형) 실속형'},
      {id:'2',val:'무배당 라이나간병플러스치매보험2종(순수보장형) 프리미엄형'},
    ],
  }

  getBankId = (value) => {
    this.setState({...this.state,bankId: value});
    switch(value) {
      case 'km':
        this.setState({...this.state, insurance: this.state.kmInsuranceList});
        break;
      case 'wr':
        this.setState({...this.state, insurance: this.state.wrInsuranceList});
        break;
      case 'sh':
        this.setState({...this.state, insurance: this.state.shInsuranceList});
        break;
      case 'hn':
        this.setState({...this.state, insurance: this.state.hnInsuranceList});
        break;
    }
  }
  getComboBoxVal = (value) => {
    this.setState({...this.state,comboBoxVal: value});
  };
  getRadioBtnVal = (value) => {
    this.setState({...this.state,radioBtnVal: value});
  };
  getTextBoxVal = (value) => {
    this.setState({...this.state,textBoxVal: value});
  };
  dataCheck = () => {
    this.getComboBoxVal();
    this.getRadioBtnVal();
    this.getTextBoxVal();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Grid></Grid>
        <div className="space"></div> 
        <ComboBox getComboBoxVal={this.getComboBoxVal}></ComboBox>
        <div className="space"></div> 
        <RadioButton getRadioBtnVal={this.getRadioBtnVal}></RadioButton>
        <div className="space"></div> 
        <div>name: </div>
        <TextBox getTextBoxVal={this.getTextBoxVal}></TextBox>
        <div className="space"></div> 
        <button onClick={this.dataCheck}>Check Data</button>
        <div>
          <div className="textBox">금융 기관 </div>
          <ComboBox 
            dataList={this.state.bankList}  
            getComboBoxVal={this.getBankId}></ComboBox>
          <div className="textBox">상품명 </div>
          <ComboBox 
            dataList={this.state.insurance}  
            getComboBoxVal={this.getBankId}></ComboBox>
        </div>
      </>
    );
  }
}

export default App;