import './App.css';
import React, {Component} from 'react';
import ComboBox from './components/comboBox';
import Grid from './components/grid';
import RadioButton from './components/radioButton';
import TextBox from './components/textBox';
import axios from "axios";


class App extends Component {

    state = {
        comboBoxVal: "",
        radioBtnVal: "",
        textBoxVal: ""
    }

    getComboBoxVal = (value) => {
        this.setState({...this.state, comboBoxVal: value});
    };
    getRadioBtnVal = (value) => {
        this.setState({...this.state, radioBtnVal: value});
    };
    getTextBoxVal = (value) => {
        this.setState({...this.state, textBoxVal: value});
    };
    dataCheck = () => {
        this.getComboBoxVal();
        this.getRadioBtnVal();
        this.getTextBoxVal();
        let root = this.state;
        if(root.comboBoxVal===""||root.textBoxVal===""||root.radioBtnVal===""){
            alert("아직 체크하지 않은 항목이 있어요!")
            return;
        }
        console.log(this.state);
        axios.post("http://localhost:8080/react/insert.do", {
            name : root.textBoxVal,
            gender : root.comboBoxVal,
            part : root.radioBtnVal
        })
            .then(function (response) {
                // response
            }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
    };

    render() {
        return (
            <>
                <Grid/>
                <div className="space"/>
                <ComboBox getComboBoxVal={this.getComboBoxVal}/>
                <div className="space"/>
                <RadioButton getRadioBtnVal={this.getRadioBtnVal}/>
                <div className="space"/>
                <TextBox getTextBoxVal={this.getTextBoxVal}/>
                <div className="space"/>
                <button onClick={this.dataCheck}> Check Data</button>
            </>
        );
    }
}

export default App;