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
import bodyParser from 'body-parser'
require('dotenv').config()

const app = express()
app.use(bodyParser.json())

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack.config'

const compiler = webpack(config)

app.use('/api', (req, res) => {
  let opts = {
    url: process.env.URL + req.originalUrl.replace('api/', ''),
    method: 'GET',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': process.env.AUTH
    },
    body: null
  }
  fetch(opts.url, opts)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.status(200).end(JSON.stringify(response))
    })
})

app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(compiler))
app.use('/', (req, res) => {
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
})


export default app