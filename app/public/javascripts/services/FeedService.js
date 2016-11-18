app.factory('FeedService', function($http) {

  var instance = {
  	generate: function(responses) {

	  var url = '/api/feed/generate';

	  var data = {
	  	responses: responses
	  }

	  return $http.post(url, data)
	  	.then(function(res){
	  		return res.data.stories
	  	})
	  
  	}
  };

  return instance;
});