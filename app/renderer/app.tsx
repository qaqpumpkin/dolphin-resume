import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import store from '@src/store';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css'

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
