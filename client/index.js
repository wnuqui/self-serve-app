import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { render } from 'react-dom'
import { browserHistory, Router } from 'react-router'
import routes from '../shared/routes'
import * as reducers from '../shared/reducers'

let initialState = window.__INITIAL_STATE__

const reducer = combineReducers(reducers)
const store = createStore(reducer, initialState)

render(
  <Provider store={ store }>
    <Router routes={ routes } history={ browserHistory } />
  </Provider>,
  document.getElementById('app')
)