const lodash = require('lodash');
const moment = require('moment');

const mixins = {

	abort: (code, message) => {
		let err = new Error(message);
		err.status = code;
		throw err;
	},

	randomString: length => {
		return crypto.randomBytes(Math.ceil(length * 3 / 4))
	        .toString('base64')   // convert to base64 format
	        .slice(0, length)     // return required number of characters
	        .replace(/\+/g, '0')  // replace '+' with '0'
	        .replace(/\//g, '0'); // replace '/' with '0'
	},
};


lodash.mixin(mixins);

// Config
lodash.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

module.exports = lodash;