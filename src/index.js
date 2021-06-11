import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss'

import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import LogRocket from 'logrocket';
LogRocket.init('an21p3/thesilence');

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['news']
}
const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, composeEnhancers(
  middleware
))
const persister = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
