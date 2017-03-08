import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { browserHistory, Router } from 'react-router'
import routes from '../shared/routes'
import * as reducers from '../shared/reducers'
import styles from './styles.css'

let initialState = window.__INITIAL_STATE__

const reducer = combineReducers(reducers)
const store = createStore(reducer, initialState, applyMiddleware(thunk))

render(
  <Provider store={ store }>
    <Router routes={ routes } history={ browserHistory } />
  </Provider>,
  document.getElementById('app')
)