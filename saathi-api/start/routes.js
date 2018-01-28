'use strict'

const Route = use('Route')

Route.group(() => {
    
    Route
    	.post('login', 'UserController.login')
    
    Route
    	.post('register', 'UserController.register')

}).prefix('api/users')

Route.group(() => {
    
    Route
    	.resource('feelings', 'FeelingController')
    
    Route
    	.resource('feelings.comments', 'FeelingCommentController')

}).prefix('api')