'use strict'

import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './shared/routes'

const app = express()

app.use((req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.log(err)
      return res.status(500).end('Internal server error.')
    }

    if (!renderProps) return res.status(404).end('Not found.')

    const componentHTML = renderToString((
      <RouterContext {...renderProps} />
    ))
    
    const HTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Self Serve App Prototype</title>
        </head>
        <body>
          <div id="app">${componentHTML}</div>
          <script type="application/javascript" src="/bundle.js"></script>
        </body>
      </html>
    `

    res.end(HTML)  
  })
})

export default app