app.controller('FrontendController', function ($scope, $document, $mdMedia, $timeout, ViewpointsService, PartiesService, FeedService) {

	$scope.feed = {
		embedOptions: {
			width: $mdMedia('(min-width: 769px)') ? 600 : '100%',
			height: $mdMedia('(min-width: 769px)') ? 300 : 360
		},
		received: false,
		stories: null
	}

	$scope.viewpoints = ViewpointsService
	$scope.parties = PartiesService



	$scope.currentViewPointIndex = 0;
	$scope.responses = {}

	// wait until everything is loaded
	$scope.loadingComplete = false;
	$scope.$watch('[viewpoints,parties]', function(){
		if($scope.viewpoints.all.length && $scope.parties.all.length) {
			$scope.loadingComplete = true;
		}
	}, true)


	$scope.saveViewpointPosition = function(i, id, agree) {

		// save the response locally
		$scope.responses[id] = {
			id:id,
			agree:agree
		}

		// move on to next viewpoint
		$scope.currentViewPointIndex = i + 1

		// if finished, move on to parties
		if ($scope.currentViewPointIndex == $scope.viewpoints.all.length) {

			scrollToParties();

			// reset the viewpoint index once the animation is complete
			$timeout(function(){$scope.currentViewPointIndex = 0}, 1100);
		}
	}


	$scope.selectParty = function(party) {
		$scope.selectedParty = party
		scrollToFeedLoading()
	}




	$scope.scrollToParties = function() {
		scrollTo('parties')
	}

	$scope.scrollToFeedLoading = function() {
		scrollTo('feed-loading')
	}

	$scope.scrollToViewpoints = function() {
		scrollTo('viewpoints')
	}

	$scope.scrollToFeed = function() {
		FeedService.generate(null)
			.then(function(stories){
				$scope.feed.stories = stories
				scrollTo('feed')
				$scope.feed.received = true;
			})
		
		
	}


	var scrollTo = function(elementId){
		var section = angular.element(document.getElementById(elementId));
		var offset = 0;
		var duration = 1000;
	    $document.scrollToElement(section, offset, duration);
	}

})
