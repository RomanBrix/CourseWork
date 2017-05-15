import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const init = document.getElementById('mountNode');
render(<App/>, init);
