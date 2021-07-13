import React, {Component} from 'react';
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
                <InputLabel htmlFor="age-native-simple">Gender</InputLabel>
                <Select
                    native
                    onChange={this.getData}
                    inputProps={{
                        name: "gender",
                        id: "gender-native-simple"
                    }}
                >
                    <option aria-label="None" value=""/>
                    <option value="남자">Male</option>
                    <option value="여자">Female</option>
                </Select>
            </FormControl>
        );
    }
}

export default ComboBox;

