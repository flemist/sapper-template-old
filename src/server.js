import sirv from 'sirv';
const express = require('express');
import compression from 'compression';
import * as sapper from '../__sapper__/server.js';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

var server = express();

server.disable('x-powered-by');

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
		if (err) console.log('error', err);
	});
