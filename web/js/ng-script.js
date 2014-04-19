var app = angular.module('exterzoApp', []);

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
