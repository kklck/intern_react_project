import React, {Component} from 'react';


class TextBox extends Component {

    getData = (event) => {
        this.props.getTextBoxVal(event.target.value);
<<<<<<< HEAD:frontend/src/components/textBox.jsx
        event.preventDefault();
=======
        
>>>>>>> upstream/main:src/components/textBox.jsx
    }


    render() {
        return (
            <input type="text"
                   onChange={this.getData}
            />
        );
    }
}

export default TextBox;