'use strict';

var FB = require('fb');
FB.setAccessToken('214860878956757|iakWnMluOrhoMm6iphesIIpmgII')

var getOtherPartyStories = function(parties, closestParty){

	// strip out the closeParty
	var partiesToScrape = parties.filter(function(party){
		return closestParty.id != party.id
	})

	// scrape 'em

	var promises = []
	for (var i = partiesToScrape.length - 1; i >= 0; i--) {
		var partyToScrape = partiesToScrape[i];

			var p = new Promise(function(resolve, reject){


				FB.api('/' + partyToScrape.fb_id + '/feed', function(res){

					if(!res || res.error) {
						console.log(!res ? 'error occurred' : res.error);
						reject(res)
						return;
					}

					// return first story
					// get parts of id
					var parts = res.data[0].id.split('_')
					var source_id = parts[0]
					var post_id = parts[1]

					var story = {
						url: 'https://www.facebook.com/' + source_id + '/posts/' + post_id
					}

					resolve(story)

				})


			});

			promises.push(p)

	}

	return Promise.all(promises)
}



module.exports = {
	"getOtherPartyStories": getOtherPartyStories 
}