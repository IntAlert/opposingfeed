var express = require('express');
var router = express.Router();
var models = require('../../models');
// var roles = require('../../config/authorisation')

/* GET all friendships. */
// router.get('/get', roles.can('access admin app'), function(req, res, next) {
router.get('/all', function(req, res, next) {


	// get the even twin feed
	models.Story.findAll({
		order: [['createdAt', 'DESC']],
		attributes: ['id','title', 'url', 'agree'],
		include: [
			{
				model:models.Viewpoint,
				attributes: [
					'title'
				]
			}
		]
	})
	.then(function(stories){
		res.json({
			stories: stories
		})
	})

});

router.get('/byViewpoint/:ViewpointId', function(req, res, next) {


	// get the even twin feed
	models.Story.findAll({
		where: {
			ViewpointId:req.params.ViewpointId
		},
		order: [['createdAt', 'DESC']],
		attributes: ['id','title', 'url', 'agree'],
		include: [
			{
				model:models.Viewpoint,
				attributes: [
					'title'
				]
			}
		]
	})
	.then(function(stories){
		res.json({
			stories: stories
		})
	})

});

router.post('/create', function(req, res, next) {


	// get the even twin feed
	models.Story.create({
		title: req.body.title,
		url: req.body.url,
		ViewpointId: req.body.ViewpointId,
		agree: req.body.agree
	})
	.then(function(story){
		res.json({
			story: story
		})
	})

});

router.post('/update/:StoryId', function(req, res, next) {

	// get the story
	models.Story.findOne({
		where: {
			id: req.params.StoryId
		}
	}).then(function(story){

		// if no story, 404
		if (!story) {
			return res.json({
				story: story
			})
		}

		// update
		story.title = req.body.title
		story.url = req.body.url
		story.ViewpointId = req.body.ViewpointId
		story.agree = req.body.agree

		return story.save()

	}).then(function(story){
		return res.json({
			story: story
		})
	})

});

router.post('/delete/:StoryId', function(req, res, next) {

	models.Story.findOne({
		where: {
			id: req.params.StoryId
		}
	}).then(function(story){

		if (!story) {
			return res.json({
				deleted: false
			})
		}

		return story.destroy()

	}).then(function(story){
		return res.json({
			deleted: true
		})
	})
})

module.exports = router;
