import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginControl from './LoginControl';
import NameForm from './nameform';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';

  ReactDOM.render(
    <FlavorForm />,
    document.getElementById('root')
  );
serviceWorker.unregister();
