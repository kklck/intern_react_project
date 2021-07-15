import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import ComboBox from './components/comboBox';
// import Grid from './components/grid';
// import RadioButton from './components/radioButton';
// import TextBox from './components/textBox';
// import axios from "axios";
import {Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import example from "./components/example";
import banka from "./components2/banka";


class App extends Component {
    //
    // state = {
    //     comboBoxVal: "",
    //     radioBtnVal: "",
    //     textBoxVal: ""
    // }
    //
    // getComboBoxVal = (value) => {
    //     this.setState({...this.state, comboBoxVal: value});
    // };
    // getRadioBtnVal = (value) => {
    //     this.setState({...this.state, radioBtnVal: value});
    // };
    // getTextBoxVal = (value) => {
    //     this.setState({...this.state, textBoxVal: value});
    // };
    // dataCheck = () => {
    //     this.getComboBoxVal();
    //     this.getRadioBtnVal();
    //     this.getTextBoxVal();
    //     let root = this.state;
    //     if(root.comboBoxVal===""||root.textBoxVal===""||root.radioBtnVal===""){
    //         alert("아직 체크하지 않은 항목이 있어요!")
    //         return;
    //     }
    //     console.log(this.state);
    //     axios.post("http://localhost:8080/react/insert.do", {
    //         name : root.textBoxVal,
    //         gender : root.comboBoxVal,
    //         part : root.radioBtnVal
    //     }).then(function (response) {
    //         // response
    //     }).catch(function (error) {
    //         // 오류발생시 실행
    //     }).then(function() {
    //         // 항상 실행
    //     });
    // };

    render() {
        return (
                    <Router>
                        <Navbar bg="dark" variant="dark" className="mb-4">
                            <Navbar.Brand href="/example">
                                example
                            </Navbar.Brand>
                            <Navbar.Brand href="/banka">
                                banka
                            </Navbar.Brand>
                        </Navbar>
                        <Route path="/example" component={example}/>
                        <Route path="/banka" component={banka}/>
                    </Router>
        );
    }
}

export default App;