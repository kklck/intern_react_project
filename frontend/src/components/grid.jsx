import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@material-ui/core";
import ComboBox from './comboBox';
import axios from "axios";


const createData = (id, name, email, phone) => {
    return {id, name, email, phone};
}

const users = [createData(1, 'Shinwon', 'dnjs@naver.com', '01020006001'),
    createData(2, 'hasoo', 'haha@hanmail.net', '01020012410'),
    createData(3, 'toga', 'garu@gmail.com', '01034871204'),]

class Grid extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount() {
        this.getApi();
    }

    getApi = () => {
        axios.get("http://localhost:8080/react/getList.do")
            .then(res => {
                console.log(res.data);
                this.setState({
                    users: res.data.users
                })
            })
            .catch(res => console.log(res))
    }


    render() {
        const dtoList = this.state.users;
        return (
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">No</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Part</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/*{users.map(user => (*/}
                        {/*    <TableRow key={user.id}>*/}
                        {/*        <TableCell align="right">{user.id}</TableCell>*/}
                        {/*        <TableCell align="right">{user.name}</TableCell>*/}
                        {/*        <TableCell align="right">{user.email}</TableCell>*/}
                        {/*        <TableCell align="right">{user.phone}</TableCell>*/}
                                {dtoList.map((item)=>{
                                    return <TableRow key={item.uid}>
                                        <TableCell align="right">{item.uid}</TableCell>
                                        <TableCell align="right">{item.name}</TableCell>
                                        <TableCell align="right">{item.gender}</TableCell>
                                        <TableCell align="right">{item.part}</TableCell>
                                    </TableRow>
                                })}
                        {/*    </TableRow>*/}
                        {/*))}*/}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default Grid;