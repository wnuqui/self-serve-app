import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import { createBrowserHistroy } from 'history'
import { routes } from '../shared/routes'

const history = createBrowserHistroy()

render(
  <Router children={routes} history={history} />,
  document.getElementById('app')
)