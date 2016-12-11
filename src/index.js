import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

export function render() {
  const container =
    document.getElementById('root') ||
    document.createElement('root'); // For testing. If there's actually no root element, this won't help.

  ReactDOM.render(
    <App />,
    container
  );
}

render();
