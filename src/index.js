import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Error404 } from './Error404.js';

const link = document.createElement("link");
link.rel = "manifest";    
link.setAttribute('href', `./${process.env.REACT_APP_LANG}Manifest.json`)
document.head.appendChild(link);

const meta = document.createElement("meta");
const title = document.createElement("title");
meta.setAttribute('name', `description`)
if (process.env.REACT_APP_LANG === 'nl') {
  meta.setAttribute('content', 'Wat is de wortel van 163216?')
  title.innerText = '404 - Pagina Niet Gevonden';
} else {
  meta.setAttribute('content', 'The Root of 163216')
  title.innerText = '404 - Page Not Found';
}  
document.head.appendChild(meta);
document.head.appendChild(title);

ReactDOM.render(
  <React.StrictMode>
    <Error404 />
  </React.StrictMode>,
  document.getElementById('root')
);
