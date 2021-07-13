import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class ComboBox extends Component {
    // state = {
    //     age: 0,
    // };
    
    getData = (event) => {
      this.props.getComboBoxVal(event.target.value)
    }


  // handleChange = (event) => {
  //     const name = event.target.name;
  //     this.setState({
  //       ...this.state,
  //       [name]: event.target.value
  //     });
  //     console.log(typeof(event.target.value));
  //     console.log(this.state);
  //   };

  render() {
      return (
        <FormControl>
            <InputLabel htmlFor="age-native-simple">Age</InputLabel>
            <Select
                native
                onChange={this.getData}
                inputProps={{
                name: "age",
                id: "age-native-simple"
                }}
            >
                <option aria-label="None" value="" />
                <option value={10}>Teenager</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
            </Select>
        </FormControl>
      );
  }
}

export default ComboBox;

