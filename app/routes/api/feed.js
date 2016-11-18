var express = require('express');
var router = express.Router();
// var models = require('../../shared/models');
// var roles = require('../../config/authorisation')

/* GET all friendships. */
// router.get('/get', roles.can('access admin app'), function(req, res, next) {
router.post('/generate', function(req, res, next) {

	res.json({
		
		stories: [
			{
				url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCheesePageOfficial%2Fposts%2F10152659192411469&width=500"

			},
			{
				url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D1276027899105601%26id%3D149905068384562%26substory_index%3D0&width=500"


			},
			{
				url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D1067401600039447%26id%3D485652091547737%26substory_index%3D0"

			}
		]
	})

});

module.exports = router;
