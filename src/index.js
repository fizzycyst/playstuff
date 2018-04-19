import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store, SimpleForm, showResults } from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
// ReactDOM.render(<App />, document.getElementById('root'));
const rootEl = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      <SimpleForm onSubmit={showResults} />
    </div>
  </Provider>,
  rootEl
);
registerServiceWorker();
