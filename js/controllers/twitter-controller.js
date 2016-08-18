/**
 * Created by Jackson on 8/18/16.
 */
app.controller('twitterController', function($scope, $http){
    $http({
        method: 'GET',
        url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=cokecola'
    }).then(function successFunction(tweetData){
            $scope.tweets = tweetData.data.statuses;
            console.dir($scope.tweets);
        }, function failureFunction(tweetData){
            console.log(tweetData);
        }
    );
});