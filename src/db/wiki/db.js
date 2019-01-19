'use strict';

const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/Wiki';

export default mongoose.createConnection(uri);