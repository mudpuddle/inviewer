'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var configuration = require('./configuration');
var ipc = require('ipc');

var appWindow = null;
var launchWindow = null;

app.on('ready', function() {
  if (!configuration.readSettings('cached')) {
    //https://invis.io/9F4E39AK4
    configuration.saveSettings('cached', { "id": "default", "url": "http://www.google.com" });
  };

  launchWindow = new BrowserWindow({
    height: 400,
    width: 300,
    resizable: false
  });

  launchWindow.loadUrl('file://' + __dirname + '/app/launch.html');
});

ipc.on('launch-app-window', function(event, arg) {
  var w = arg.width;
  var h = arg.height;
  var mainWindow = new BrowserWindow({
    width: (process.platform == 'win32') ? w + 15 : w,
    height: (process.platform == 'win32') ? h + 15 : h,
    show: false,
    resizable: false,
    "node-integration": false
  });

  mainWindow.loadUrl(arg.url);
  mainWindow.show();
  mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.webContents.insertCSS(".toolbar{display: none;} .powered-by{display: none;} .button-right{display: none;} .button-left{display: none;}")
  });

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});
