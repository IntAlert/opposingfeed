app.controller('AdminController', function ($scope, $document, $mdMedia, $timeout, $mdSidenav, ViewpointsService, PartiesService, FeedService, StoriesService) {

	// Viewpoints
	$scope.viewpoints = ViewpointsService
	$scope.parties = PartiesService

	// State
	$scope.selectedViewpoint = null
	$scope.selectedStory = null

	$scope.selectedParty = null

	$scope.testSelectedStory = {
		url:"https://www.google.co.uk/"
	}

	$scope.showViewpoint = function(viewpoint){
		$scope.selectedViewpoint = viewpoint
		$mdSidenav('right').close()

		// reset stories
		$scope.selectedViewpointStories = {
			agree: [],
			disagree: []
		}
		StoriesService.getByViewpoint(viewpoint.id)
			.then(function(stories){
				$scope.selectedViewpointStories.agree = stories.filter(function(s){
					return s.agree
				})

				$scope.selectedViewpointStories.disagree = stories.filter(function(s){
					return !s.agree
				})
			})


	}

	$scope.showStory = function(story){
		$scope.selectedStory = story
		$mdSidenav('right').open()
	}

	$scope.hideStory = function(story){
		$scope.selectedStory = null
	}

	$scope.showParty = function(party){
		$scope.selectedParty = party
	}

	$scope.hideParty = function(party){
		$scope.selectedParty = null
	}

	$scope.showStoryCreate = function(agree) {
		$scope.selectedStory = {
			agree:agree,
			ViewpointId: $scope.selectedViewpoint.id
		}
		$mdSidenav('right').open()
	}

	$scope.showViewpointCreate = function(agree) {
		$scope.selectedViewpoint = {

		}
		$mdSidenav('right').close()
	}

	$scope.saveSelectedStory = function() {
		if ($scope.selectedStory.hasOwnProperty('id')) {
			var promise = StoriesService.update($scope.selectedStory)
		} else {
			var promise = StoriesService.create($scope.selectedStory)
		}
		$mdSidenav('right').close()

		promise.then(function(){
			$scope.showViewpoint($scope.selectedViewpoint)
		})
	}

	$scope.saveSelectedViewpoint = function() {
		if ($scope.selectedViewpoint.hasOwnProperty('id')) {
			var promise = ViewpointsService.update($scope.selectedViewpoint)
		} else {
			var promise = ViewpointsService.create($scope.selectedViewpoint)
		}

		promise.then(function(viewpoint){
			$scope.showViewpoint(viewpoint)
		})
	}

	$scope.deleteSelectedStory = function(){

		if (confirm("Are you sure?")) {
			StoriesService.delete($scope.selectedStory.id)
			.then(function(){
				$scope.showViewpoint($scope.selectedViewpoint)
			})
			$mdSidenav('right').close()	
		}
		
	}

	$scope.deleteSelectedViewpoint = function(){

		if (confirm("Are you sure?")) {
			ViewpointsService.delete($scope.selectedViewpoint.id)
			.then(function(){
				$scope.selectedViewpoint = null
			})
			$mdSidenav('right').close()	
		}
		
	}


})
