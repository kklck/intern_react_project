import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';




class RadioButton extends Component {
    
    getData = (event) => {
        this.props.getRadioBtnVal(event.target.value);
    }

    render() {
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">Country</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={this.value} onChange={this.getData}>
                    <FormControlLabel value="Korea" control={<Radio />} label="Korea" />
                    <FormControlLabel value="USA" control={<Radio />} label="USA" />
                    <FormControlLabel value="Greece" control={<Radio />} label="Greece" />
                    <FormControlLabel value="Rusia" control={<Radio />} label="Rusia" />
                    <FormControlLabel value="India" control={<Radio />} label="India" />
                </RadioGroup>
            </FormControl>
        );
    }
}

export default RadioButton;