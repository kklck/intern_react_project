import React, { Component } from 'react';
import ComboBox from './comboBox';
import TextBox from './textBox';
  

class Grid extends Component {

  getInsurancePeriod = (value) => {
    this.props.getInsurancePeriod(value)
  }
  getPaymentPeriod = (value) => {
    this.props.getPaymentPeriod(value)
  }
  getPaymentCycle = (value) => {
    this.props.getPaymentCycle(value)
  }
  getPaymentAmount = (value) => {
    this.props.getPaymentAmount(value)
  }

    render() {
        return (
      <table border="1">
        <thead>
          <tr>
            <td className="table" align="center">보험명</td>
            <td className="table" align="center">보험기간</td>
            <td className="table" align="center">납입기간</td>
            <td className="table" align="center">납입주기</td>
            <td className="table" align="center">납입금액(만원)</td>
            <td className="table" align="center">보험료</td>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td align="center" width='450px'>{this.props.insuranceName}</td>
              <td align="right">
                <ComboBox 
                  className="combo-in-grid" 
                  dataList={this.props.insurancePeriods}
                  getComboBoxVal={this.getInsurancePeriod}>
                </ComboBox>
              </td>
              <td align="right">
                <ComboBox 
                  className="combo-in-grid" 
                  dataList={this.props.paymentPeriods}
                  getComboBoxVal={this.getPaymentPeriod}>
                </ComboBox>
              </td>
              <td align="right">
                <ComboBox 
                  className="combo-in-grid" 
                  dataList={this.props.paymentCycles}
                  getComboBoxVal={this.getPaymentCycle}>
                </ComboBox>
              </td>
              <td align="center">
                <TextBox getTextBoxVal={this.getPaymentAmount}></TextBox>
              </td>
              <td align="right">
                <span>0</span>
              </td>
            </tr>
        </tbody>
      </table>
    
        );
    }
}

export default Grid;