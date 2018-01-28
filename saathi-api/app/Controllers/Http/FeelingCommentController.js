'use strict'

const Comment = use ('App/Models/Comment');

class FeelingCommentController {

	async index(request) {
		return await Comment.query()
			.where('feeling_id', request.params.feelings_id)
			.orderBy('created_at', 'DESC')
			.fetch();
	}

	async store({ request, params, auth }) {
		const data = request.only(['body']);

		data.feeling_id = params.feelings_id;
		
		if (auth.user)
			data.user_id = auth.user.id;

		await Comment.create(data);
	}
}

module.exports = FeelingCommentController
