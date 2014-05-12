/*var app = angular.module('exterzoApp', []);

app.controller('AlbumController', function($scope, $location){
    $scope.album = [{name:'Southwest Serenade', duration: '2:34'},
        {name:'Northern Light Waltz', duration: '3:21'},
        {name:'Eastern Tango', duration: '17:45'}];
});

app.controller('DeathrayMenuController', function($scope){
    $scope.menuState = {};
    $scope.menuState.show = false;
    $scope.toggleMenu = function() {
        $scope.menuState.show = !$scope.menuState.show;
    };
    $scope.isDisabled = false;
    $scope.stun = function() {
        $scope.isDisabled = true;
    };
});

app.controller('HeaderController', function($scope){
    $scope.isError = false;
    $scope.isWarning = false;
    $scope.showError = function() {
        $scope.messageText = 'This is an error!';
        $scope.isError = true;
        $scope.isWarning = false;
    };
    $scope.showWarning = function() {
        $scope.messageText = 'Just a warning. Please carry on.';
        $scope.isWarning = true;
        $scope.isError = false;
    };
});

app.controller('RestaurantTableController', function($scope){
    $scope.directory = [{name:'The Handsome Heifer', cuisine:'BBQ'},
        {name:"Green's Green Greens", cuisine:'Salads'},
        {name:'House of Fine Fish', cuisine:'Seafood'}];
    $scope.selectRestaurant = function(row) {
        $scope.selectedRow = row;
    };
});

app.controller('CartController', function($scope){
    $scope.bill = {};
    $scope.items = [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];
    var calculateTotals = function() {
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++) {
            total = total + $scope.items[i].price * $scope.items[i].quantity;
        }
        $scope.bill.totalCart = total;
        $scope.bill.discount = total > 100 ? 10 : 0;
        $scope.bill.subtotal = total - $scope.bill.discount;
    };
    $scope.$watch('items', calculateTotals, true);
}); */


var amailServices = angular.module('AMail',['ngRoute']);

// Publish our messages for the list template
amailServices.controller('ListController', function($scope, $http) {
    $http.get('/angular/products').success(function(data, status, headers, config) {
        $scope.messages = data;
    });
    //$scope.messages = messages;
});
// Get the message id from the route (parsed from the URL) and use it to
// find the right message object.
amailServices.controller('DetailController', function($scope, $routeParams, $http) {
    $http.get('/angular/products').success(function(data, status, headers, config) {
        $scope.message = data[$routeParams.id];
    });

});

amailServices.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            controller: 'ListController',
            templateUrl : '/js/views/list.html'}).

        when('/view/:id',{
            controller : 'DetailController',
            templateUrl:'/js/views/detail.html'}).

        otherwise({
            redirectTo:'/'
        });
});

angular.bootstrap(document.getElementById("amail"),['AMail']);

var appModule = angular.module('app', []);

appModule.controller('SomeController', function($scope) {
    $scope.message = { text: 'nothing clicked yet' };
    $scope.clickUnfocused = function() {
        $scope.message.text = 'unfocused button clicked';
    };
    $scope.clickFocused = function() {
        $scope.message.text = 'focus button clicked';
    }
});

appModule.controller('AddUserController', function($scope) {
    $scope.message = '';
    $scope.addUser = function () {
// TODO for the reader: actually save user to database...
        $scope.message = 'Thanks, ' + $scope.user.first + ', we added you!';
    };
});

ngdc


