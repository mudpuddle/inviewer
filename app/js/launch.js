'use strict';

var ipc = require('ipc');

var launchButton = document.getElementById('launch-button');
var launchData = {};

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
    $scope.selectedProject = null;
    $scope.deviceList = {"default": {"name": "Default", "width": 800, "height": 600 }};
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
      }
    });
    $scope.launchClick = function() {
      launchData = $scope.selectedProject;
      ipc.send('launch-app-window', $scope.selectedProject);
    }
  }]);
