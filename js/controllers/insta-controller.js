app.controller('instaController', function($scope, $http){
	
	app.directive('instagram', function(){
		return {
			restrict: 'E',
			templateUrl: 'js/directives/insta-view.html'
		}
	});

	var feed = new Instafeed({
	    get: 'user',
	    userId: '249655166',
	    sortBy: 'most-recent',
	    limit: 12,
	    // clientId: '8b81590906e04825a1d28b276caa1bdf'
	    accessToken: '1786183730.8b81590.16aa19bacf7d4d418843d962627ddf5f'
    });
    feed.run();
});
