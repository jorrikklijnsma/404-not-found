import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Error404 } from './Error404.js';

const link = document.createElement("link");
link.rel = "manifest";    
link.setAttribute('href', `./${process.env.REACT_APP_LANG}Manifest.json`)
document.head.appendChild(link);

ReactDOM.render(
  <React.StrictMode>
    <Error404 />
  </React.StrictMode>,
  document.getElementById('root')
);
