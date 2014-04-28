<?php
/**
 * @var yii\web\View $this
 */
$this->title = 'Angular';
$this->registerJsFile('/js/angular.min.js');
$this->registerJsFile('/js/ng-script.js');
?>
<div data-ng-app="exterzoApp">

    <div data-ng-controller="PlayerController">
        <button data-ng-click="play()" class="btn btn-success" data-ng-show="!playing">Play</button>
        <button data-ng-click="pause()" class="btn btn-warning" data-ng-show="playing">Pause</button>
        <button data-ng-click="stop()" class="btn btn-danger" data-ng-show="playing || audio.currentTime">Stop</button>
        <br/>
        Playing audio: <b>{{ playing }}</b>
    </div>

    <hr/>

    <div data-ng-controller="MyController">
        <input type="text" data-ng-model="person.name" class="form-control" placeholder="Enter your name" />
        <h5>Hello {{ person.name }}</h5>
        <h5>{{ clock }}</h5>
    </div>

    <hr/>

    <div data-ng-controller="DemoController">
        <h4>The simplest adding machine ever</h4>
        <button data-ng-click="add(3)" class="btn btn-primary">Add</button>
        <button data-ng-click="subtract(2)" class="btn btn-default">Subtract</button>
        <h4>Current count: {{ counter }}</h4>
    </div>

    <hr/>

    <div data-ng-controller="ListController">
        <pre data-ng-repeat="prog in programs">
            {{prog}}
        </pre>
    </div>
</div>
