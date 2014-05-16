<?php
/**
 * @var yii\web\View $this
 */
$this->title = 'Angular';
$this->registerJsFile('/js/angular.min.js');
$this->registerJsFile('/js/angular-route.min.js');
$this->registerJsFile('/js/angular-resource.min.js');
$this->registerJsFile('/js/controllers/controllers.js');
$this->registerJsFile('/js/directives/directives.js');
$this->registerJsFile('/js/services/services.js');
//$this->registerJsFile('/js/ng-script.js');
?>

<div data-ng-app="guthub">

<header>
    <h1>GutHub</h1>
</header>
<div  data-butterbar>Loading...</div>
<div class="container-fluid">
    <div class="row-fluid">
        <div class="span2">
            <!--Sidebar-->
            <div id="focus"><a href="/angular/index/#/new">New Recipe</a></div>
            <div><a href="/angular/index/#/">Recipe List</a></div>
        </div>
        <div class="span10">
            <div  data-ng-view></div>
        </div>
    </div>
</div>
</div>


<!--<style type="text/css">
    .selected {
        background-color: lightgreen;
    }
</style>
<div id="amail" data-ng-app="AMail">
    <h1>A-Mail</h1>
    <div ng-view></div>
</div>
<hr/>

<div id="app" ng-app="app">
    <div ng-controller="SomeController">
        <button ng-click="clickUnfocused()">
            Not focused
        </button>
        <button ngbk-focus ng-click="clickFocused()">
            I'm very focused!
        </button>
        <div>{{message.text}}</div>
    </div>

    <h1>Sign Up</h1>
    <form name='addUserForm' ng-controller="AddUserController">
        <div ng-show='message'>{{message}}</div>
        <div>First name: <input name='firstName' ng-model='user.first' required></div>
        <div>Last name: <input ng-model='user.last' required></div>
        <div>Email: <input type='email' ng-model='user.email' required></div>
        <div>Age: <input type='number'
                         ng-model='user.age'
                         ng-maxlength='3'
                         ng-min='1'></div>
        <div><button ng-click='addUser()'
                     ng-disabled='!addUserForm.$valid'>Submit</button>
    </form>
</div>

<div data-ng-app="exterzoApp">

    <table  data-ng-controller='RestaurantTableController'>
        <tr  data-ng-repeat='restaurant in directory'  data-ng-click='selectRestaurant($index)'
             data-ng-class='{selected: $index==selectedRow}'>
            <td>{{restaurant.name}}</td>
            <td>{{restaurant.cuisine}}</td>
        </tr>
    </table>

    <hr/>

    <div data-ng-controller='HeaderController'>
        <div class="alert" data-ng-class='{"alert-danger": isError, "alert-warning": isWarning}'>{{messageText}}</div>
        <button data-ng-click='showError()'>Simulate Error</button>
        <button data-ng-click='showWarning()'>Simulate Warning</button>
    </div>

    <hr/>

    <table data-ng-controller='AlbumController'>
        <tr data-ng-repeat='track in album'>
            <td>{{$index + 1}}</td>
            <td>{{track.name}}</td>
            <td>{{track.duration}}</td>
        </tr>
    </table>

    <hr/>

    <div data-ng-controller='DeathrayMenuController'>
        <button data-ng-click='toggleMenu()'>Toggle Menu</button>
        <ul data-ng-show='menuState.show'>
            <li class='menu-disabled-{{isDisabled}}' data-ng-click='stun()'>Stun</li>
            <li data-ng-click='disintegrate()'>Disintegrate</li>
            <li data-ng-click='erase()'>Erase from history</li>
        </ul>
    </div>

    <hr/>

    <div data-ng-controller="CartController">
        <div data-ng-repeat="item in items">
            <span>{{item.title}}</span>
            <input data-ng-model="item.quantity">
            <span>{{item.price | currency}}</span>
            <span>{{item.price * item.quantity | currency}}</span>
        </div>
        <div>Total: {{bill.totalCart | currency}}</div>
        <div>Discount: {{bill.discount | currency}}</div>
        <div>Subtotal: {{bill.subtotal | currency}}</div>
    </div>
</div>-->
