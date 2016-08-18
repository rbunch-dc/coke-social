/**
 * Created by Jackson on 8/18/16.
 */
var app = angular.module('cokeApp', ['ngRoute']);

app.directive('twitter', function(){
    return {
        restrict: 'E',
        templateUrl: 'js/directives/twitter.html'
    }
});