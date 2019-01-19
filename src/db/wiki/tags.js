'use strict';

const Schema = require('mongoose').Schema;
import db from './db';

const tags = Schema({name: String});

export default db.model('tags', tags);