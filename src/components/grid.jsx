import React, { Component } from 'react';
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
  

  const createData = (id, name, email, phone) => {
    return { id, name, email, phone };
  }

  const users = [createData(1,'Shinwon','dnjs@naver.com','01020006001'),
  createData(2,'hasoo','haha@hanmail.net','01020012410'),
  createData(3,'toga','garu@gmail.com','01034871204'),]

class Grid extends Component {

    render() {
        return (
            <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="right">No</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell align="right">{user.id}</TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        );
    }
}

export default Grid;