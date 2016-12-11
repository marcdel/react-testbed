import React from 'react';
import ReactDOM from 'react-dom';
import { render } from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(div);
});
