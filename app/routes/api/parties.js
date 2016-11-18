var express = require('express');
var router = express.Router();
var models = require('../../models');
// var roles = require('../../config/authorisation')

/* GET all friendships. */
// router.get('/get', roles.can('access admin app'), function(req, res, next) {
router.get('/all', function(req, res, next) {


	// get the even twin feed
	models.Party.findAll({
		attributes: ['id','name']
	})
		.then(function(parties){
			res.json({
				parties: parties
			})
		})

});

module.exports = router;
