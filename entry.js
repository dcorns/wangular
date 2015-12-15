/**
 * entry
 * Created by dcorns on 12/14/15
 * Copyright © 2015 Dale Corns
 */
'use strict';
var entry = angular.module('entry', []);
entry.controller('entryController', function($scope){
  console.log($scope.entryForm);
});