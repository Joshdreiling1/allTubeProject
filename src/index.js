import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store'
import {Provider} from 'react-redux'
import { HashRouter } from 'react-router-dom'
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider createStore={Store}>
        <HashRouter>
<App />
        </HashRouter>
    </Provider>,
 document.getElementById('root'));
// registerServiceWorker();
