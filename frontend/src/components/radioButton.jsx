import React, {Component} from 'react';
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
                <FormLabel component="legend">Part</FormLabel>
                <RadioGroup aria-label="part" name="part" value={this.value} onChange={this.getData}>
                    <FormControlLabel value="제조" control={<Radio/>} label="제조"/>
                    <FormControlLabel value="통신" control={<Radio/>} label="통신"/>
                    <FormControlLabel value="금융" control={<Radio/>} label="금융"/>
                    <FormControlLabel value="Data" control={<Radio/>} label="Data"/>
                    <FormControlLabel value="Cloud" control={<Radio/>} label="Cloud"/>
                </RadioGroup>
            </FormControl>
        );
    }
}

export default RadioButton;