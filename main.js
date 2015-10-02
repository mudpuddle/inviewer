'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var configuration = require('./configuration');
var ipc = require('ipc');

var appWindow = null;
var launchWindow = null;

app.on('ready', function() {
  launchWindow = new BrowserWindow({
    height: 400,
    width: 300,
    resizable: false
  });

  launchWindow.loadUrl('file://' + __dirname + '/app/launch.html');
  launchWindow.openDevTools();
});

ipc.on('launch-app-window', function(event, arg) {
  var w = 650;
  var h = 510;
  var mainWindow = new BrowserWindow({
    width: (process.platform == 'win32') ? w + 15 : w,
    height: (process.platform == 'win32') ? h + 15 : h,
    show: false,
    "node-integration": false
  });

  mainWindow.loadUrl('http://www.google.com');
  mainWindow.show();
  mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.webContents.insertCSS(".toolbar{display: none;} .powered-by{display: none;} .button-right{display: none;} .button-left{display: none;}")
  });

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});
