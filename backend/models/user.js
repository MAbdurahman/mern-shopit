//**************** imports ****************//
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please enter your name!'],
		maxLength: [31, 'Name cannot exceed 31 characters!'],
	},
	email: {
		type: String,
		required: [true, 'Please enter your email!'],
		unique: true,
		validate: [validator.isEmail, 'Please enter a valid email address!'],
	},
	password: {
		type: String,
		required: [true, 'Please enter your password!'],
		minlength: [8, 'Password must be at least 8 characters!'],
		select: false,
	},
	avatar: {
		public_id: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
	},
	role: {
		type: String,
		default: 'user',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	resetPasswordToken: String,
	resetPasswordExpire: Date,
});

//**************** encrypt password before saving user****************//
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}

	this.password = await bcrypt.hash(this.password, 10);
});

//**************** compare user password ****************//
userSchema.methods.comparePassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

//**************** return jwt token ****************//
userSchema.methods.getJwtToken = function () {
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_TIME,
	});
};

module.exports = mongoose.model('user', userSchema);