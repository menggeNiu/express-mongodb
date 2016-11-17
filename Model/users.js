var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Jusers');

var userSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String
});
var classSchema = new mongoose.Schema({
	classname: String,
	des: String,
	price: String,
	oldprice: String,
	pic: String,
	type: String,
	lingyu: String
});


module.exports = {
	users: mongoose.model('users', userSchema, 'users'),
	classlist: mongoose.model('class', classSchema, 'class')
}