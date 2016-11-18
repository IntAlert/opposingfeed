app.controller('FrontendController', function ($scope, $document, $mdMedia, FeedService) {




	$scope.feed = {
		embedOptions: {
			width: $mdMedia('(min-width: 769px)') ? 600 : '100%',
			height: $mdMedia('(min-width: 769px)') ? 300 : 360
		},
		received: false,
		stories: null
	}

	$scope.viewpoints = [
		{
			text: "Cheese is great"
		},
		{
			text: "It's Six O'Clock"
		},
		{
			text: "Liam's jeans are baggy"
		}
	];

	$scope.currentViewPoint = 0


	$scope.saveViewpointPosition = function(i, agree) {
		$scope.currentViewPoint = i + 1
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
