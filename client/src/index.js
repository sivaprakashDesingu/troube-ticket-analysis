import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './assest/styles/App.css';
import './assest/styles/mobile.css';

const MainApp = () =>
    <BrowserRouter>
        <Route path="/" component={App} />
    </BrowserRouter>


ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
