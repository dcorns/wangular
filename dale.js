/**
 * dale.js
 * Created by dcorns on 9/20/15
 * Copyright © 2015 Dale Corns
 * @description A simple module and controller based on ng-book
 */
'use strict';
angular.module('dale',[])
.controller('DaleController', function($scope, $timeout){
    /**
     * Simple clock
     * using angular setTimeOut function $timeout
     * Set the clock property with a new date and time every second. Since scope.clock is bound in the view, the view is automatically updated as well.
     */
    var updateClock = function(){
      $scope.clock = new Date();
      $timeout(function(){
        updateClock();
      }, 1000);
    };
    updateClock();
  });