'use strict'

const router = require('express').Router
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const resourcejs = require('resourcejs')

export const createJsonApi = function (init) {
	var jsonApi = router()
		// .use((req, res, next) => {
		// 	res.set('Transfer-Encoding', 'gzip, chunked');
		// 	next();
		// })
		.use(bodyParser.json())
		.use(bodyParser.urlencoded({ extended: true }))
		.use(methodOverride())

	init(jsonApi)

	return jsonApi
		.use(function (req, res, next) {
			res.end()
		})
}

var options = {
	after: function (req, res, next) {
		if (res.resource.error) console.log('error', res.resource.error)
		console.log('JSON API: ', req.method, ' ', req.url)
		// res.end();
		next()
	}
}

export const addMongoApi = function (api, name, model) {
	resourcejs(api, '', name, model).rest(options)
}
