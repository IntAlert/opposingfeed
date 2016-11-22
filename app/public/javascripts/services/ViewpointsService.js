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


  instance.create = function(viewpoint) {
  var url = '/api/viewpoints/create';

    return $http.post(url, viewpoint)
      .then(function(res){
        getAll()
        return res.data.viewpoint
      })
  }

  instance.update = function(viewpoint) {
  var url = '/api/viewpoints/update/' + viewpoint.id;

    return $http.post(url, viewpoint)
      .then(function(res){
        getAll()
        return res.data.viewpoint
      })
  }

  instance.delete = function(id) {
  var url = '/api/viewpoints/delete/' + id;

    return $http.post(url)
      .then(function(res){
        getAll()
        return res.data
      })
  }

  // eager load
  getAll()

  return instance;
});