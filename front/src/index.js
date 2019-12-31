import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers} from 'redux'
import noteReducer from './reducers/note-reducer'
import userReduer from './reducers/user-reducer'
import {Provider} from 'react-redux'

const reducer = combineReducers({
  notes:noteReducer,
  user:userReduer
})

const store = createStore(reducer)

console.log('Store state at startup index.js line 17: ', store.getState())

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App store={store}/>
    </Provider>
    ,
    document.getElementById('root')
  )
}

renderApp()
store.subscribe(renderApp)
