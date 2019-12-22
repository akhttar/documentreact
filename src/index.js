import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './sytle/style.css'
import "babel-polyfill";
 import App from './components/app';
 import DocumentForm from './components/documentForm';
import Header from './components/header';

import configureStore from './redux/store/configureStore';
import VariableCounter from './components/test';

const store = configureStore();


ReactDOM.render(
    <div>
        {/* <VariableCounter/> */}
        <Header />
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/" exact component={App} />
                <Route path="/document/new/:id" component={DocumentForm} />
            </BrowserRouter>
        </Provider>
    </div>
    , document.querySelector('#root'));