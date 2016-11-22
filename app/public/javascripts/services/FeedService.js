app.factory('FeedService', function($http) {

  var instance = {
  	generate: function(userData) {

	  var url = '/api/feed/generate';


	  // convert responses to array
	  var responsesArray = []
	  for (i in userData.responses) {
	  	responsesArray.push(userData.responses[i])
	  }

	  var data = {
	  	party: userData.party,
	  	responses: responsesArray
	  }

	  return $http.post(url, data)
	  	.then(function(res){
	  		return res.data.stories
	  	})
	  
  	}
  };

  return instance;
});