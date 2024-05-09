// src/index.js
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
//import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

/*
export const ReactStrictMode = <React.StrictMode>
  <App />
</React.StrictMode>
*/

export const rootElement = document.getElementById('root')

const root = ReactDOMClient.createRoot(rootElement);
root.render(<App />);

/*
ReactDOM.render(
  ReactStrictMode,
  rootElement
);
*/