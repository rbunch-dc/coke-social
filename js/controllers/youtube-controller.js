cokeApp.config(function($sceProvider) {
	$sceProvider.enabled(false);
});

cokeApp.controller('youTubeCtrl', function($scope, $http) {

	$scope.base = "http://www.youtube.com/embed/";

	var playlistId = "PLCIVZWq1FAwca7NgiJGn5BCj6tSrEOkLb";
	var baseUrl = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=";
	var key = "&key=AIzaSyDKu4qMYk3Q_qpiM0Zn4rFCzZlXMIJkM8Q";
	var url = baseUrl + playlistId + key;
	$scope.YTVidArr = [];
	
	$http({
		method: 'GET',
		url: url
	}).then(function SuccessFunc(response) {
		console.log(response);
		for (var i = 0; i < response.data.items.length; i++) {
			var vidId = response.data.items[i].snippet.resourceId.videoId;
			var temp = $scope.base + vidId;
			$scope.YTVidArr.push(temp);
			// var vidId = response.data.items[i].snippet.resourceId.videoId;
			// var desc = response.data.items[i].snippet.description;
			// var chanel = response.data.items[i].snippet.channelTitle;
			// var newVid = new YTVideo(vidId, desc, chanel);
			// console.log(newVid);
			console.log($scope.YTVidArr);

		}
	}, function FailFunc() {
		console.log("Failed due to " + response.status);
	});
	
	
function YTVideo(vidId, desc, chanel) {
	this.vidId = vidId;
	this.desc = desc;
	this.chanel = chanel;
}




});
