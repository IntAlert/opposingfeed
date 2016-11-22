var express = require('express');
var router = express.Router();
var models = require('../../models');
// var roles = require('../../config/authorisation')

/* GET all friendships. */
// router.get('/get', roles.can('access admin app'), function(req, res, next) {
router.get('/all', function(req, res, next) {

	// get the even twin feed
	models.Viewpoint.findAll({
		order: [['sort_order', 'DESC']],
		attributes: ['id','title', 'sort_order']
	})
		.then(function(viewpoints){
			res.json({
				viewpoints: viewpoints
			})
		})

});


router.post('/create', function(req, res, next) {


	// get the even twin feed
	models.Viewpoint.create({
		title: req.body.title,
		sort_order: req.body.sort_order
	})
	.then(function(viewpoint){
		res.json({
			viewpoint: viewpoint
		})
	})

});

router.post('/update/:ViewpointId', function(req, res, next) {

	// get the story
	models.Viewpoint.findOne({
		where: {
			id: req.params.ViewpointId
		}
	}).then(function(viewpoint){

		// if no story, 404
		if (!viewpoint) {
			return res.json({
				viewpoint: viewpoint
			})
		}

		// update
		viewpoint.title = req.body.title
		viewpoint.sort_order = req.body.sort_order
		
		return viewpoint.save()

	}).then(function(viewpoint){
		return res.json({
			viewpoint: viewpoint
		})
	})

});

router.post('/delete/:ViewpointId', function(req, res, next) {

	models.Viewpoint.findOne({
		where: {
			id: req.params.ViewpointId
		}
	}).then(function(viewpoint){

		if (!viewpoint) {
			return res.json({
				deleted: false
			})
		}

		return viewpoint.destroy()

	}).then(function(viewpoint){
		return res.json({
			deleted: true
		})
	})
})



module.exports = router;
