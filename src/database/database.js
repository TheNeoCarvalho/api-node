const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, 
    { 
        useUnifiedTopology: true, 
        useNewUrlParser: true
    }
)
mongoose.Promise = global.Promise

module.exports = mongoose