'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var globalShortcut = require('global-shortcut');
var configuration = require('./configuration');
var ipc = require('ipc');

app.on('ready', function() {
  var w = 650;
  var h = 510;
  var mainWindow = new BrowserWindow({
    width: (process.platform == 'win32') ? w + 15 : w,
    height: (process.platform == 'win32') ? h + 15 : h,
    show: false,
    "node-integration": false
  });

  mainWindow.loadUrl('http://www.github.com');
  mainWindow.show();
  mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.webContents.insertCSS(".toolbar{display: none;} .powered-by{display: none;} .button-right{display: none;} .button-left{display: none;}")
  });
});
