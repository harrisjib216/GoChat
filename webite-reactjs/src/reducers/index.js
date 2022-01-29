import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';

import { AuthReducer } from './AuthReducer'
import { ChatReducer } from './ChatReducer'

export const Store = createStore(
    combineReducers(
        {
            auth: AuthReducer,
            chat: ChatReducer,
        },
        applyMiddleware(thunk)
    )
);