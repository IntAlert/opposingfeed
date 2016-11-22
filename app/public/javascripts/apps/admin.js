var app = angular
	.module('OpposingFeedAdmin', ['ngMaterial', 'ngMessages', 'duScroll'])

	.config(function($compileProvider, $locationProvider, $sceDelegateProvider){
	   // Allow Whatsapp link
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(whatsapp|http|https|mailto):/);
		
		$locationProvider.html5Mode({
			enabled: true,
			rewriteLinks: false
		});

		$sceDelegateProvider.resourceUrlWhitelist([
			// Allow same origin resource loads.
			'self',
			// Allow loading from FB
			'https://www.facebook.com/**'
		]); 
});