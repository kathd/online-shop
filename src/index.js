import React from 'src/node_modules/react';
import ReactDOM from 'src/node_modules/react-dom';
import { BrowserRouter } from 'src/node_modules/react-router-dom';
import 'src/styles/index.css';
import App from 'src/App';
import * as serviceWorker from 'src/serviceWorker';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
