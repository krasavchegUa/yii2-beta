var app = angular.module('exterzoApp', []);

app.controller('MyController', function($scope) {
    $scope.person = { name: "Rudak Volodymyr" };
    var updateClock = function() {
        $scope.clock = new Date();
    };
    var timer = setInterval(function() {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
});

app.controller('DemoController', function($scope){
    $scope.counter = 0;
    $scope.add = function(amount) {
        $scope.counter += amount;
    };
    $scope.subtract = function(amount){
        $scope.counter -= amount;
        if($scope.counter < 0 ){
            $scope.counter = 0;
        }
    }
});

app.controller('ListController', function($scope, $http) {
    var apiKey = 'MDEzNjU2OTcxMDEzOTg3MDgzNDQzYjIwZA001',
        nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';
    // Hidden our previous section's content
    // construct our http request
    $http({
        method: 'JSONP',
        url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
    }).success(function(data, status) {
            $scope.programs = data.list.story;
            console.log(data);
            // Now we have a list of the stories (data.list.story)
            // in the data object that the NPR API
            // returns in JSON that looks like:
            // data: { "list": {
            //   "title": ...
            //   "story": [
            //     { "id": ...
            //       "title": ...
        }).error(function(data, status) {
            // Some error occurred
        });
});

app.controller('PlayerController', ['$scope', function($scope) {
    $scope.playing = false;
    $scope.audio = document.createElement('audio');
    $scope.audio.src = '/media/npr.mp4';

    $scope.play = function() {
        $scope.audio.play();
        $scope.playing = true;
    };
    $scope.pause = function() {
        $scope.audio.pause();
        $scope.playing = false;
    };
    $scope.stop = function() {
        $scope.audio.pause();
        $scope.audio.currentTime = 0;
        $scope.playing = false;
    };

    $scope.audio.addEventListener('ended', function() {
        $scope.$apply(function() {
            $scope.stop()
        });
    });
}]);

app.controller('RelatedController', ['$scope', function($scope) {
}]);
