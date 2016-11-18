app.factory('FeedService', function($http) {

  var instance = {
  	generate: function(viewpoints) {

	  var url = '/api/feed/generate';

	  var data = {
	  	viewpoints: viewpoints
	  }

	  return $http.post(url, data)
	  	.then(function(res){
	  		return res.data.stories
	  	})
	  
  	}
  };

  return instance;
});