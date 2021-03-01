const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useMongoClient: true})
mongoose.Promise = global.Promise

export default mongoose