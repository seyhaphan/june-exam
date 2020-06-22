import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

ReactDOM.render(
   <Provider store={store}>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </Provider>,
   document.getElementById('root')
);
