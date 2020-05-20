import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App"
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import { todoReducer } from './reducers/todoReducer'

export const rootReducer = combineReducers({
  todo: todoReducer
})
let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => console.log(store.getState()))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


