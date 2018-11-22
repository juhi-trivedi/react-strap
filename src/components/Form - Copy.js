// Dependencies
import React, { Component } from 'react';
// Externals
import Field from './Field';
import Button from './Button';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div>
        {/* Name field */}
        <Field
		  label="Name"
          onChange={(event) => this.updateField('name', event.target.value)}
          value={this.state.name}
        />
        {/* Email field */}
        <Field
		  label="Email"
          onChange={(event) => this.updateField('email', event.target.value)}
          value={this.state.email}
        />
        {/* Message textarea */}
		 <textarea 
		 	 label="Message"
			 value={this.state.message} 
			 onChange={(event) => this.updateField('message', event.target.value)} 
		/>
        {/* Submit button */}
        <Button
          email="abc123@gmail.com"
          formValues={this.state}
        />
        <input type="text" name="" placeholder="abc" />
      </div>
    );
  }
}

export default Form;