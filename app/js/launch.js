'use strict';

var ipc = require('ipc');
var configuration = require('../configuration.js');

var launchButton = document.getElementById('launch-button');

angular.module('inViewerApp', [])
  .factory('DeviceData', function($http) {
     var factory = {};
     factory.getJsonDeviceList = function() {
        var getURL = 'config/devices.json';
        return $http.get(getURL);
     };
     return factory;
  })
  .controller('DeviceController', ['$scope', 'DeviceData', function($scope, DeviceData) {
    var cachedProject = configuration.readSettings('cached');
    DeviceData.getJsonDeviceList().success(function(data) {
      var count = 0;
      for (var property in data.devices)
      {
        if (data.devices.hasOwnProperty(property))
        {
          count++;
        }
      }
      if (count > 0)
      {
        $scope.deviceList = data.devices;
        $scope.selectedProject = $scope.deviceList[cachedProject.id];
        $scope.selectedProject.url = cachedProject.url;
      }
    });
    $scope.launchClick = function() {
      cachedProject.id = $scope.selectedProject.id;
      cachedProject.url = $scope.selectedProject.url;
      $scope.selectedProject = $scope.deviceList[cachedProject.id];
      $scope.selectedProject.url = cachedProject.url;
      configuration.saveSettings('cached', cachedProject);
      ipc.send('launch-app-window', $scope.selectedProject);
    }
  }]);
