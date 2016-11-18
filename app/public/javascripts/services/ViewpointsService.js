app.factory('ViewpointsService', function($http) {

  var instance = {
  	all: []
  };

  var getAll = function() {

	  var url = '/api/viewpoints/all';

	  return $http.get(url)
	  	.then(function(res){
	  		instance.all = res.data.viewpoints
	  	})
  }


  // eager load
  getAll()

  return instance;
});