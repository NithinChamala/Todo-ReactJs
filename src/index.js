import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker'
import Reducer from './reducer';
// import Test from './test'
import Todo from './Components/Todo'
const store = createStore(Reducer);

ReactDOM.render(<Provider store = {store}><Todo /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
