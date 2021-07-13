
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
    textBoxVal : ""
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
        <TextBox getTextBoxVal={this.getTextBoxVal}></TextBox>
        <div className="space"></div> 
        <button onClick={this.dataCheck}> Check Data</button>
      </>
    );
  }
}

export default App;