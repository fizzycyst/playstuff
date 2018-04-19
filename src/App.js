import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Field, reduxForm, reducer as reduxFormReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Button } from 'react-bootstrap';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
      </div>
    );
  }
}
const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
});
export const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export function showResults (values) {
  console.log('The folling was submitted: ' + JSON.stringify(values, null, 2));
}

export var SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name='firstName'
            component='input'
            type='text'
            placeholder='First Name'
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name='lastName'
            component='input'
            type='text'
            placeholder='Last Name'
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name='email'
            component='input'
            type='email'
            placeholder='Email'
          />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field
              name='sex'
              component='input'
              type='radio'
              value='male'
            />{' '}
            Male
          </label>
          <label>
            <Field
              name='sex'
              component='input'
              type='radio'
              value='female'
            />{' '}
            Female
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name='favoriteColor' component='select'>
            <option />
            <option value='ff0000'>Red</option>
            <option value='00ff00'>Green</option>
            <option value='0000ff'>Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor='employed'>Employed</label>
        <div>
          <Field
            name='employed'
            id='employed'
            component='input'
            type='checkbox'
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name='notes' component='textarea' />
        </div>
      </div>
      <div>
        <Button bsStyle='primary' type='submit' disabled={pristine || submitting}>
          Submit This
        </Button>
        <button type='button' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};
SimpleForm = reduxForm({
  form: 'simple'
})(SimpleForm);
export default App;
