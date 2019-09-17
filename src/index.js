import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home'

import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


import Todo from './components/Todo'

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
