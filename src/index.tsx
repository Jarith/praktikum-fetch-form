import React from 'react';
import ReactDOM from 'react-dom';
import { Search } from 'pages/Search';

import { createApp } from 'store';

import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux';

const initialState = (window as any).__INITIAL_STATE__ || {};

const { store } = createApp(initialState);

const App = () => (
    <Provider store={store}>
        <Search />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
