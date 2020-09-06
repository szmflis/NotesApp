import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import noteReducer from '../reducers/note-reducer'
import userReducer from '../reducers/user-reducer'

const reducer = combineReducers({
  notes: noteReducer,
  user: userReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
)

export default store
