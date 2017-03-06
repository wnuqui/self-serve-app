'use strict'

import express from 'express'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './shared/routes'
import * as reducers from './shared/reducers'
import fetch from 'isomorphic-fetch'

const app = express()

app.use('/*', (req, res) => {
  if (req.subdomains[0] !== 'api') {
    const reducer = combineReducers(reducers)
    const store = createStore(reducer)
    
    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
      if (err) {
        console.log(err)
        return res.status(500).end('Internal server error.')
      }

      if (!renderProps) return res.status(404).end('Not found.')

      const componentHTML = renderToString((
        <Provider store={ store }>
          <RouterContext {...renderProps} />
        </Provider>
      ))
      
      const initialState = store.getState()
      
      const HTML = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Self Serve App Prototype</title>
          </head>
          <body>
            <div id="app"><div>${componentHTML}</div></div>
            <script type="application/javascript" src="/bundle.js"></script>
            <script type="application/javascript">
              window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
          </body>
        </html>
      `

      res.end(HTML)  
    })
  } else {
    console.log(req.method, 'http://localhost:3000/' + req.originalUrl) // GET /users/:id
    fetch('http://localhost:3000/' + req.originalUrl, {
      method: req.method
    }).then((res) => {
        console.log(res)
      })
  }
})

export default app