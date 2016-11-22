app.factory('StoriesService', function($http) {

  var instance = {};

  instance.getByViewpoint = function(ViewpointId) {

	  var url = '/api/stories/byViewpoint/' + ViewpointId;

	  return $http.get(url)
	  	.then(function(res){
	  		return res.data.stories
	  	})
  }

  instance.create = function(story) {
	var url = '/api/stories/create';

	  return $http.post(url, story)
	  	.then(function(res){
	  		return res.data.stories
	  	})
  }

  instance.update = function(story) {
	var url = '/api/stories/update/' + story.id;

	  return $http.post(url, story)
	  	.then(function(res){
	  		return res.data.stories
	  	})
  }

  instance.delete = function(id) {
	var url = '/api/stories/delete/' + id;

	  return $http.post(url)
	  	.then(function(res){
	  		return res.data
	  	})
  }

  return instance;
});