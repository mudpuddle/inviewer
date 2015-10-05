# inViewer

> A small electron app for viewing webpages, in particular prototypes developed using [invision app](http://www.invisionapp.com/)

inViewer is a small [Electron](http://electron.atom.io/) based app, with both Windows and Mac OS X builds, that taks a url for an invision project and displays it in a stand alone window.  These windows are customizable to best fit your project needs.

## Getting Started

This application requires [Node.js](https://nodejs.org/en/)

### Download / Clone

Clone the repo using Git:

```bash
git clone https://github.com/mudpuddle/inviewer.git
```

Alternatively you can [download](https://github.com/mudpuddle/inviewer/archive/master.zip)
this repository.

### What's included

In the repo you'll find the following directories and files.

| File/Folder     | Provides                                       |
|-----------------|------------------------------------------------|
| app             | Folder containing the html portion of the app  |
| assets          | Folder containing icons for the builds         |
| README.md       | Details for quickly understanding the project. |
| config.json     | config file for building and packaging the app |
| configuration.js| nconf file for saving app configuration info   |
| package.json    | npm package information.                       |
| main.js         | Main Electron app file                         |

### Build

To get started be sure to install the required node packages:

```bash
npm install
```

> inviewer requires NodeJS 4.1 +

To start the app, run:

```bash
npm start
```
