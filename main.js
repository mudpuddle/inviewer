'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var globalShortcut = require('global-shortcut');
var configuration = require('./configuration');
var ipc = require('ipc');

app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    width: 650,
    height: 510,
    show: false,
    "node-integration": false
  });

  mainWindow.loadUrl('https://invis.io/9F4E39AK4');
  mainWindow.show();
  mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.webContents.insertCSS(".toolbar{display: none;} .powered-by{display: none;} .button-right{display: none;} .button-left{display: none;}")
  });
});
