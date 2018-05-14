import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

const reducers = {
  form: formReducer
}


const reducer = combineReducers(reducers)

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(),
  // other store enhancers if any
));
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
