var app = angular
	.module('OpposingFeedPublic', ['ngMaterial', 'ngMessages', 'duScroll'])
	// .config(function($compileProvider, $locationProvider, $mdThemingProvider, $mdIconProvider){
	//   $mdIconProvider
	//     .defaultIconSet('/components/material-design-icons/iconfont/MaterialIcons-Regular.svg', 24)


	//    $mdThemingProvider.theme('customTheme') 
 //          .primaryPalette('grey')
 //          .accentPalette('orange')
 //          .warnPalette('red');
	// });


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