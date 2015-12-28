/**
 * entry
 * Created by dcorns on 12/14/15
 * Copyright © 2015 Dale Corns
 */
'use strict';
var entry = angular.module('entry', ['ngMessages']);
entry.controller('entryController', function($scope){
  $scope.signUp = function(){
    console.dir($scope.signup);
  }
});