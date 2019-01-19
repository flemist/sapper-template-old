import sirv from 'sirv'
import compression from 'compression'
import * as sapper from '../__sapper__/server.js'
const express = require('express')

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

let server = express()

server.disable('x-powered-by')

// API Example:
// import wikiApi from './api/wiki.js';
// server
// 	.use(compression({ threshold: 0 }))
// 	.use('/api/wiki/v1', wikiApi);

server
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err)
	})
