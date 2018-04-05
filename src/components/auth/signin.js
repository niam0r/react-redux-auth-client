import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
  render() {
    return (
      <div>
        <form>
          <fieldset className="form-group">
            <label>Email:</label>
            <input  className="form-control"/>
          </fieldset><fieldset className="form-group">
            <label>Passord:</label>
            <input  className="form-control"/>
          </fieldset>
          <button action="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
    );
  }
}

export default reduxForm(
  form: 'signin',
  fields: ['email', 'password']
)(Signin);
