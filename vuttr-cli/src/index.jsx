import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './App';

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import configureStore from './store/store';
const store = configureStore();

render(
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </Provider>,
    document.getElementById('app')
);