import React, { Component } from 'react';
import ComboBox from './comboBox';
import Grid from './contentTable';

const result = {
    insuranceName: '',
    insurancePeriod: '',
    paymentPeriod: '',
    paymentCycle: '',
    paymentAmount: '',
}

class banka extends Component {
    state = {
        comboBoxVal : "",
        bankId: "",
        insuranceId: "",
        insurances: [],
        insuranceName:"",
        insurancePeriod: "",
        paymentPeriod: '',
        paymentCycle: '',
        paymentAmount: '',
        insurancePeriods: [],
        paymentPeriods: [],
        paymentCycles: [],
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
            {id:'3',val:'무배당 라이나THE치아보험_보존강화형'},
            {id:'4',val:'무배당 라이나THE치아보험_보철강화형'},
        ],
        shInsuranceList : [
            {id:'5',val:'무배당 라이나간병플러스치매보험1종(페이퍼형) 분할지급'},
            {id:'6',val:'무배당 라이나간병플러스치매보험1종(페이퍼형) 일시지급'},
        ],
        hnInsuranceList : [
            {id:'7',val:'무배당 라이나간병플러스치매보험2종(순수보장형) 실속형'},
            {id:'8',val:'무배당 라이나간병플러스치매보험2종(순수보장형) 프리미엄형'},
        ],
        kmInsurance1 :
            {
                id:'1',
                insuranceName:"무배당 암걱정없는표적치료암보험(갱신형) 실속형",
                insurancePeriods:[{id:'1',val:'10년'},{id:'2',val:'20년'}],
                paymentPeriods:[{id:'1',val:'5년'},{id:'2',val:'10년'}],
                paymentCycles:[{id:'1',val:'1개월'},{id:'3',val:'1년'}],
            },
        kmInsurance2 :
            {
                id:'2',
                insuranceName:"무배당 암걱정없는표적치료암보험(갱신형) 프리미엄형",
                insurancePeriods:[{id:'1',val:'10년'},{id:'2',val:'20년'},{id:'3',val:'30년'}],
                paymentPeriods:[{id:'1',val:'10년'},{id:'3',val:'20년'}],
                paymentCycles:[{id:'2',val:'6개월'},{id:'3',val:'1년'}],
            },
        wrInsurance1 :
            {
                id:'3',
                insuranceName:"무배당 라이나THE치아보험_보존강화형",
                insurancePeriods:[{id:'1',val:'10년'},{id:'2',val:'20년'}],
                paymentPeriods:[{id:'1',val:'5년'},{id:'2',val:'10년'}],
                paymentCycles:[{id:'1',val:'1개월'},{id:'3',val:'1년'}],
            },
        wrInsurance2 :
            {
                id:'4',
                insuranceName:"무배당 라이나THE치아보험_보철강화형",
                insurancePeriods:[{id:'1',val:'10년'},{id:'2',val:'20년'},{id:'3',val:'30년'}],
                paymentPeriods:[{id:'1',val:'10년'},{id:'3',val:'20년'}],
                paymentCycles:[{id:'2',val:'6개월'},{id:'3',val:'1년'}],
            },
        shInsurance1 :
            {
                id:'5',
                insuranceName:"무배당 라이나간병플러스치매보험1종(페이퍼형) 분할지급",
                insurancePeriods:[{id:'1',val:'10년'},{id:'2',val:'20년'}],
                paymentPeriods:[{id:'1',val:'5년'},{id:'2',val:'10년'}],
                paymentCycles:[{id:'1',val:'1개월'},{id:'3',val:'1년'}],
            },
        shInsurance2 :
            {
                id:'6',
                insuranceName:"무배당 라이나간병플러스치매보험1종(페이퍼형) 일시지급",
                insurancePeriods:[{id:'1',val:'10년'},{id:'2',val:'20년'},{id:'3',val:'30년'}],
                paymentPeriods:[{id:'2',val:'10년'},{id:'3',val:'20년'}],
                paymentCycles:[{id:'2',val:'6개월'},{id:'3',val:'1년'}],
            },
        hnInsurance1 :
            {
                id:'7',
                insuranceName:"무배당 라이나간병플러스치매보험2종(순수보장형) 실속형",
                insurancePeriods:[{id:'1',val:'10년'},{id:'2',val:'20년'}],
                paymentPeriods:[{id:'1',val:'5년'},{id:'2',val:'10년'}],
                paymentCycles:[{id:'1',val:'1개월'},{id:'3',val:'1년'}],
            },
        hnInsurance2 :
            {
                id:'8',
                insuranceName:"무배당 라이나간병플러스치매보험2종(순수보장형) 프리미엄형",
                insurancePeriods:[{id:'1',val:'10년'},{id:'2',val:'20년'},{id:'3',val:'30년'}],
                paymentPeriods:[{id:'2',val:'10년'},{id:'3',val:'20년'}],
                paymentCycles:[{id:'2',val:'6개월'},{id:'3',val:'1년'}],
            },
    }

    getBankId = (value) => {
        this.setState({...this.state, bankId: value});
        switch(value) {
            case 'km':
                this.setState({...this.state, insurances: this.state.kmInsuranceList});
                break;
            case 'wr':
                this.setState({...this.state, insurances: this.state.wrInsuranceList});
                break;
            case 'sh':
                this.setState({...this.state, insurances: this.state.shInsuranceList});
                break;
            case 'hn':
                this.setState({...this.state, insurances: this.state.hnInsuranceList});
                break;
        }
    }
    getInsuranceId = (value) => {
        this.setState({...this.state,insuranceId:value});
        switch(value){
            case '1':
                this.setState({...this.state,
                    insuranceName: this.state.kmInsurance1.insuranceName,
                    insurancePeriods:this.state.kmInsurance1.insurancePeriods,
                    paymentPeriods: this.state.kmInsurance1.paymentPeriods,
                    paymentCycles: this.state.kmInsurance1.paymentCycles,
                });
                break;
            case '2':
                this.setState({...this.state,
                    insuranceName: this.state.kmInsurance2.insuranceName,
                    insurancePeriods:this.state.kmInsurance2.insurancePeriods,
                    paymentPeriods: this.state.kmInsurance2.paymentPeriods,
                    paymentCycles: this.state.kmInsurance2.paymentCycles,
                });
                break;
            case '3':
                this.setState({...this.state,
                    insuranceName: this.state.wrInsurance1.insuranceName,
                    insurancePeriods:this.state.wrInsurance1.insurancePeriods,
                    paymentPeriods: this.state.wrInsurance1.paymentPeriods,
                    paymentCycles: this.state.wrInsurance1.paymentCycles,
                });
                break;
            case '4':
                this.setState({...this.state,
                    insuranceName: this.state.wrInsurance2.insuranceName,
                    insurancePeriods:this.state.wrInsurance2.insurancePeriods,
                    paymentPeriods: this.state.wrInsurance2.paymentPeriods,
                    paymentCycles: this.state.wrInsurance2.paymentCycles,
                });
                break;
            case '5':
                this.setState({...this.state,
                    insuranceName: this.state.shInsurance1.insuranceName,
                    insurancePeriods:this.state.shInsurance1.insurancePeriods,
                    paymentPeriods: this.state.shInsurance1.paymentPeriods,
                    paymentCycles: this.state.shInsurance1.paymentCycles,
                });
                break;
            case '6':
                this.setState({...this.state,
                    insuranceName: this.state.shInsurance2.insuranceName,
                    insurancePeriods:this.state.shInsurance2.insurancePeriods,
                    paymentPeriods: this.state.shInsurance2.paymentPeriods,
                    paymentCycles: this.state.shInsurance2.paymentCycles,
                });
                break;
            case '7':
                this.setState({...this.state,
                    insuranceName: this.state.hnInsurance1.insuranceName,
                    insurancePeriods:this.state.hnInsurance1.insurancePeriods,
                    paymentPeriods: this.state.hnInsurance1.paymentPeriods,
                    paymentCycles: this.state.hnInsurance1.paymentCycles,
                });
                break;
            case '8':
                this.setState({...this.state,
                    insuranceName: this.state.hnInsurance2.insuranceName,
                    insurancePeriods:this.state.hnInsurance2.insurancePeriods,
                    paymentPeriods: this.state.hnInsurance2.paymentPeriods,
                    paymentCycles: this.state.hnInsurance2.paymentCycles,
                });
                break;
        }
    }
    getInsurancePeriod = (value) => {
        switch(value) {
            case '1':
                this.setState({...this.state,insurancePeriod:'10년' });
                break;
            case '2':
                this.setState({...this.state,insurancePeriod:'20년' });
                break;
            case '3':
                this.setState({...this.state,insurancePeriod:'30년' });
                break;
        }

    }
    getPaymentPeriod = (value) => {
        switch(value) {
            case '1':
                this.setState({...this.state,paymentPeriod:'5년' });
                break;
            case '2':
                this.setState({...this.state,paymentPeriod:'10년' });
                break;
            case '3':
                this.setState({...this.state,paymentPeriod:'20년' });
                break;
        }
    }
    getPaymentCycle = (value) => {
        switch(value) {
            case '1':
                this.setState({...this.state,paymentCycle:'1개월' });
                break;
            case '2':
                this.setState({...this.state,paymentCycle:'6개월' });
                break;
            case '3':
                this.setState({...this.state,paymentCycle:'1년' });
                break;
        }
    }
    getPaymentAmount = (value) => {
        this.setState({...this.state, paymentAmount: value})
    }


    getComboBoxVal = (value) => {
        this.setState({...this.state,comboBoxVal: value});
    };

    insuranceDataCheck = () => {
        result.insuranceName = this.state.insuranceName;
        result.insurancePeriod = this.state.insurancePeriod;
        result.paymentPeriod = this.state.paymentPeriod;
        result.paymentCycle = this.state.paymentCycle;
        result.paymentAmount = this.state.paymentAmount
        console.log(result);
    }

    render() {
        return (
            <>

                <table>
                    <thead>
                    <tr>
                        <td>금융기관</td>
                        <td>
                            <ComboBox
                                dataList={this.state.bankList}
                                getComboBoxVal={this.getBankId}>
                            </ComboBox>
                        </td>
                        <td>상품명</td>
                        <td>
                            <ComboBox
                                dataList={this.state.insurances}
                                getComboBoxVal={this.getInsuranceId}>
                            </ComboBox>
                        </td>
                    </tr>
                    </thead>
                </table>

                <div className="space"></div>

                <div>
                    <Grid
                        insuranceName={this.state.insuranceName}
                        insurancePeriods={this.state.insurancePeriods}
                        paymentPeriods={this.state.paymentPeriods}
                        paymentCycles={this.state.paymentCycles}
                        getInsurancePeriod={this.getInsurancePeriod}
                        getPaymentPeriod={this.getPaymentPeriod}
                        getPaymentCycle={this.getPaymentCycle}
                        getPaymentAmount={this.getPaymentAmount}>
                    </Grid>
                </div>

                <div className="space"></div>

                <button onClick={this.insuranceDataCheck}>Insurance Data Check</button>
            </>
        );
    }
}
export default banka;