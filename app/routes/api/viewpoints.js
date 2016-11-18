var express = require('express');
var router = express.Router();
var models = require('../../models');
// var roles = require('../../config/authorisation')

/* GET all friendships. */
// router.get('/get', roles.can('access admin app'), function(req, res, next) {
router.get('/all', function(req, res, next) {

	// get the even twin feed
	models.Viewpoint.findAll({
		attributes: ['id','title']
	})
		.then(function(viewpoints){
			res.json({
				viewpoints: viewpoints
			})
		})

});

module.exports = router;
