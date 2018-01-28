'use strict'

class BaseController {

	required(request, ...params) {
		if (_.isFunction(request.all)) {
			request = request.all()
		}

		if (_.every(params, param => _.has(request, param))) {
			return;
		}

		const present = _.keys(request);
		const missing = _.without(params, ...present);

		_.abort(422, `Missing Required Params: [${missing.join(', ')}]`)
		// throw (new ValidationError()).missing(...missing);
	}
	
}

module.exports = BaseController
