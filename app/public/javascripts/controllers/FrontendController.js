app.controller('FrontendController', function ($scope, $document, $mdMedia, $timeout, ViewpointsService, PartiesService, FeedService) {

	$scope.feed = {
		embedOptions: {
			width: $mdMedia('(min-width: 769px)') ? 600 : '90%',
			height: $mdMedia('(min-width: 769px)') ? 300 : 360
		},
		stories: null
	}

	$scope.viewpoints = ViewpointsService
	$scope.parties = PartiesService


	// Data state
	$scope.dataState = {
		prompts: {loaded:false},
		feed: {loaded:false}
	}

	// UI state
	$scope.sections = {
		intro: {show:true},
		viewpoints: {
			show:false,
			currentIndex:0
		},
		parties: {show:false},
		feedLoading: {
			show:false,
			feedReady:false
		},
		feed: {show:false},
		signUp: {show:false}
	}

	// User responses
	$scope.userData = {
		responses: {},
		party: null
	}


	// wait until everything is loaded
	$scope.loadingComplete = false;
	$scope.$watch('[viewpoints,parties]', function(){
		if($scope.viewpoints.all.length && $scope.parties.all.length) {
			$timeout(function(){
				// for effect!
				$scope.dataState.prompts.loaded = true;	
				$scope.sections.viewpoints.show = true;
			}, 500)
			
		}
	}, true)


	$scope.saveViewpointPosition = function(i, id, agree) {

		// save the response locally
		$scope.userData.responses[id] = {
			id:id,
			agree:agree
		}

		// move on to next viewpoint
		$scope.sections.viewpoints.currentIndex = i + 1

		// if finished, move on to parties
		if ($scope.sections.viewpoints.currentIndex == $scope.viewpoints.all.length) {

			$scope.sections.parties.show = true;
			$timeout($scope.scrollToParties)

			// reset the viewpoint index once the animation is complete
			$timeout(function(){$scope.sections.viewpoints.currentIndex = 0}, 1100);
		}
	}


	$scope.selectParty = function(party) {
		$scope.userData.party = party
		$scope.sections.feedLoading.show = true;


		$scope.dataState.feed.loaded = false;
		FeedService.generate($scope.userData)
			.then(function(stories){
				$scope.feed.stories = stories;
				$scope.sections.feed.show = true;
				$scope.sections.signUp.show = true;
			})
			.then(function(){
				// give the feed time to load
				$scope.dataState.feed.loaded = true;
				$timeout(function(){
					$scope.scrollToFeed();
				}, 2000)
			})

		// Show waiting
		$timeout($scope.scrollToFeedLoading, 100)
	}




	// SCROLLING FUNCTIONS
	$scope.scrollToViewpoints = function() {
		scrollTo('viewpoints')
	}

	$scope.scrollToParties = function() {
		scrollTo('parties')
	}

	$scope.scrollToFeedLoading = function() {
		scrollTo('feed-loading')
	}

	$scope.scrollToFeed = function() {
		scrollTo('feed')
	}

	var scrollTo = function(elementId){
		var section = angular.element(document.getElementById(elementId));
		var offset = 0;
		var duration = 1000;
	    $document.scrollToElement(section, offset, duration);
	}

})
