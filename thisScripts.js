var myApp = angular.module('myApp', []);

myApp.controller('YTctrl', function($scope, $http) {
	$scope.test = "adfadf!!";
	var playlistId = "PLCIVZWq1FAwca7NgiJGn5BCj6tSrEOkLb";

	var baseUrl = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=";
	var key = "&key=AIzaSyDKu4qMYk3Q_qpiM0Zn4rFCzZlXMIJkM8Q";
	var url = baseUrl + playlistId + key;

	$http({
		method: 'GET',
		url: url
	}).then(function SuccessFunc(response) {
		console.log(response);
		var vidId = response.data.items[i].snippet.responseId.videoId;
		var desc = response.data.items[i].snippet.description;
		var chanel = response.data.items[i].snippet.channelTitle;
		var newVid = YTVideo(vidId, des, chanel);

	}, function FailFunc() {
		console.log("Failed due to " + response.status);
	});

	var player;
	for (var i = 0; i < YTVidArr.length; i++) {
		player = YTVidArr[i];
		console.log(player);
		onYouTubeIframeAPIReady(player.vidId);
	}

	


});

var YTVidArr = [];
function YTVideo(vidId, desc, chanel) {
	this.vidId = vidId;
	this.desc = desc;
	this.chanel = chanel;
	YTVidArr.push(this);
}

function onYouTubeIframeAPIReady(player, id) {
    player = new YT.Player('div id', {
       	height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
           'onReady': onPlayerReady,
           'onStateChange': onPlayerStateChange
        }
    });
}


event.target.playVideo();
function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }




