app.factory('PartiesService', function($http) {

  var instance = {
  	all: []
  };

  var getAll = function() {

	  var url = '/api/parties/all';

	  return $http.get(url)
	  	.then(function(res){
	  		instance.all = res.data.parties
	  	})
  }


  // eager load
  getAll()

  return instance;
});