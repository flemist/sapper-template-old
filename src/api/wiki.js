'use strict'

// MongoDb API:
import { createJsonApi, addMongoApi } from './base/jsonApi'
import tags from '../db/wiki/tags'

export default createJsonApi(api => {
	addMongoApi(api, 'tags', tags)
})
