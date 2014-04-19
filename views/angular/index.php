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
        <button data-ng-click="stop()" class="btn btn-danger" data-ng-show="playing">Stop</button>
        <br/>
        Playing audio: <b>{{ playing }}</b>
    </div>

</div>
