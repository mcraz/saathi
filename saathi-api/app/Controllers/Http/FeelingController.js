'use strict'

const Feeling = use('App/Models/Feeling')
const Controller = require('./BaseController')

class FeelingController extends Controller {

	async index() {
		const feelings = await Feeling.query().withCount('comments').fetch()

		return feelings
	}

	async show({ request }) {
		const id = request.param('id')

		return await Feeling.find(id)
	}

	async store({ request }) {
		this.required(request, 'body', 'tags')

		const data = request.only(['body', 'tags'])

		return await Feeling.create(data)
	}
}

module.exports = FeelingController