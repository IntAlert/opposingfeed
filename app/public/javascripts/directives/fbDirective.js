(function (app) {
  'use strict';
  /**
  * @desc Direictive to embed facebook post
  * @example <fb-post-preview data-href="vm.postUrl"></fb-post-preview>
  */
  // angular
    // .module('OpposingFeedPublic')
    app.directive('fbPostPreview', fbPostPreview);

  /* @ngInject */
  function fbPostPreview($timeout) {
    var directive = {
      link: link,
      // template: '<div class="fb-post" data-width="500" data-href="{{href}}"></div>',
      template: '<div '+
        'class="fb-post" '+
        'data-href="{{story.url}}" '+
        'data-width="{{width}}" '+
        'data-show-text="true"> '+
      '</div>',
      restrict: 'EA',
      scope: {
        story: '=',
        width: '@'
      }
    };
    return directive;

    function link(scope, element, attrs) {
      $timeout(function() {
        if (typeof FB != 'undefined') {
          FB.XFBML.parse(element[0]);
        }
      });

      scope.$watch('story', function(){
          FB.XFBML.parse(element[0]);
      }, true)
    }
  }
})(app);

