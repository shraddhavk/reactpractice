import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginControl from './LoginControl';
import NameForm from './nameform';

  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );
serviceWorker.unregister();
