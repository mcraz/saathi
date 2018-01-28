'use strict'

const Model = use('Model')

class Feeling extends Model {
	getTags(tags) {
		return JSON.parse(tags);
	}

	setTags(tags) {
		return JSON.stringify(tags);
	}

	comments() {
		return this.hasMany('App/Models/Comment')
	}
}

module.exports = Feeling
