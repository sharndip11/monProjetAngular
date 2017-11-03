let mongoose = require('mongoose');

const localUri = 'mongodb://localhost/monProjetAngular'

mongoose.connect(localUri, { useMongoClient: true })

let User = mongoose.model('User', {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
})

module.exports.User = User