var mongoose = require('mongoose')
var Schema = mongoose.Schema
var User = mongoose.model(
    'User',
    new Schema({
        username: String,
        password: String,
        birthday: Date,
        name: String,
        avatar: String
    })
)

exports.findAll = () => {
    return new Promise((resolve, reject) => {
        console.log(111)
        User.find((err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
