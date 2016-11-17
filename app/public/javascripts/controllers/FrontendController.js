app.controller('FrontendController', function ($scope, $document, $mdMedia) {




	$scope.feed = {
		embedOptions: {
			width: $mdMedia('(min-width: 769px)') ? 600 : '100%',
			height: $mdMedia('(min-width: 769px)') ? 300 : 360
		},
		received: false,
		stories: [
			{
				url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&show_text=true&appId=1716003962060301"
			},
			{
				url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&show_text=true&appId=1716003962060301"
			},
			{
				url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&show_text=true&appId=1716003962060301"
			}
		]
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
		$scope.feed.received = true;
		scrollTo('feed')
	}


	var scrollTo = function(elementId){
		var section = angular.element(document.getElementById(elementId));
		var offset = 0;
		var duration = 1000;
	    $document.scrollToElement(section, offset, duration);
	}

})
