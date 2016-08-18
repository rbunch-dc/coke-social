app.controller('instaController', function($scope, $http){
	var feed = new Instafeed({
	    get: 'tagged',
	    tagName: 'awesome',
	    clientId: 'cocacola'
    });
    feed.run();
});
