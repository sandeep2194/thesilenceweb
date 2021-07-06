import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss'

import App from './components/App';
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const persistConfig = {
  key: 'root',
  version: 0,
  storage,
  blacklist: ['',],
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
