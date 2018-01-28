'use strict'

const User = use('App/Models/User')
const Controller = use('App/Controllers/Http/BaseController')

class UserController extends Controller {

	async login ({ request, auth }) {
		const { mobile, password } = request.all()
		
		await auth.attempt(mobile, password)
	}

	async register({ request, response }) {
		const fields = ['age', 'mobile', 'password'];
		const data = request.only(fields)

		await User.create(data)
	}
}

module.exports = UserController
