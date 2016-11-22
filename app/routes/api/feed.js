var express = require('express');
var router = express.Router();
var models = require('../../models');
// var roles = require('../../config/authorisation')

var partyScraper = require('../../lib/partyScraper')

/* GET all friendships. */
// router.get('/get', roles.can('access admin app'), function(req, res, next) {
router.post('/generate', function(req, res, next) {


	var responses = req.body.responses;
	var party = req.body.party;


	var partyStoriesPromise = models.Party.findAll()
		.then(function(parties){
			return partyScraper.getOtherPartyStories(parties, party)	
		})
	

	// // create new user
	// var userId = 1

	// // build responses to save
	// var responsesToSave = []

	// for (var i = responses.length - 1; i >= 0; i--) {

	// 	var response = responses[i];

	// 	var responsesToSave.push({
	// 		UserId: UserId,
	// 		ViewpointId: response.ViewpointId,
	// 		agree:response.agree
	// 	})
	// }

	// models.Response.bulkCreate(responsesToSave)
	// 	.then(function() { // Notice: There are no arguments here, as of right now you'll have to...
			
	// 	})

	// create WHERE conditions as opposite to submitted responses
	var orConditions = responses.map(function(response){
		response.agree = !response.agree
		return {
			ViewpointId: response.id,
			agree: !response.agree
		}
	})

	console.log(orConditions)

	// get the even twin feed
	var viewpointStoriesPromise = models.Story.findAll({
		where: {
			$or: orConditions
		},
		attributes: [
			'id',
			'title',
			'url'
		],
		include: [
			{
				model:models.Viewpoint,
				attributes: [
					'title'
				]
			}
		]
	})


	Promise
		.all([partyStoriesPromise,viewpointStoriesPromise])
		.then(function(stories){
			var partyStories = stories[0]
			var viewpointStories = stories[1]
			
			var combinedStories = []
			var combinedStories  = viewpointStories.concat(partyStories)
				.sort(function(){return Math.random() - 0.5})
			
			return res.json({
				stories: combinedStories
			})	
		})



	// if (user.fb_id == friend.id)
	// 			records.push({
	// 				ScrapeId: data.scrape.id,
	// 				friend1_id: user.fb_id,
	// 				friend2_id: friend.id
	// 			})
	// 	}
		
	// }

	// return models.Friendship.bulkCreate(records)
	// 	.then(function() { // Notice: There are no arguments here, as of right now you'll have to...
	// 		return models.Friendship.findAll({
	// 			where: {
	// 				ScrapeId: data.scrape.id
	// 			}
	// 		});
	// 	})

	// .then(function(user){
	// 	user.
	// })
	// save responses

	// // use responses to get stories

	// models.User.findOne({
	// 	where: {
	// 		id: 1
	// 	},
	// 	include: [{
 //          model: models.User,
 //          attributes: ['id', 'fb_id', 'displayName', 'gender']
	// 	.then(function(user){

	// 	})



	// res.json({
		
	// 	stories: [
	// 		{
	// 			url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCheesePageOfficial%2Fposts%2F10152659192411469&width=500"

	// 		},
	// 		{
	// 			url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D1276027899105601%26id%3D149905068384562%26substory_index%3D0&width=500"


	// 		},
	// 		{
	// 			url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D1067401600039447%26id%3D485652091547737%26substory_index%3D0"

	// 		}
	// 	]
	// })

});

module.exports = router;
