app.controller('instaController', function($scope, $http){
	var feed = new Instafeed({
	    get: 'user',
	    userId: 249655166,
	    sortBy: 'most-recent',
	    limit: 12,
	    clientId: '1786183730.8b81590.16aa19bacf7d4d418843d962627ddf5f'
    });
    feed.run();
});
