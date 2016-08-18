/**
 * Created by Jackson on 8/18/16.
 */
app.controller('twitterController', function($scope){
  
  $http({
        method: 'GET',
        url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=coke'
    }).then(function successFunction(tweetData){
            $scope.tweets = tweetData.data.statuses;
            console.dir($scope.tweets);
        }, function failureFunction(tweetData){
            console.log(tweetData);
        }
    );
    
});