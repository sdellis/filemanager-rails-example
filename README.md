# Figgy Filemanager Rails Sample App

## About Figgy Filemanager
[Figgy Filemanager](http://filemanager.surge.sh/) is a Vue.js single-page application created for (but not limited to) the Princeton University Library's [Figgy digital repository project](https://github.com/pulibrary/figgy). Figgy Filemanager allows users to rearrange and relabel images that make up larger objects. The most common example is a collection of images that represent pages in a book.

The intent is to make Figgy Filemanager as easy as possible to drop into a project, while also allowing some configuration options. Figgy Filemanager has a `dist/` build that allows one to simply point to the dist files and add a `<div id='filemanager'/>` tag to your html page. Rails integration requires a bit more setup. This repo can be used as an example or a starting point to help with that setup.

## About this Repository (Rails Sample App)
This repo is a working demo of a sample Rails app that integrates Figgy Filemanager, with simple instructions for customization. It uses the `webpacker` and `foreman` gems, which allow it to coexist with the asset pipeline.

Since Figgy Filemanager also depends on asyncronous calls to import and export data, this app also creates some basic APIs to both GET and POST data.

## Requirements
Do to the use of `webpacker` this project requires Rails 5.1 or higher.
npm is also required. This has been tested with node version 8.2.1 and npm version 5.4.1.

## Usage
To run the app:
```
bundle install
npm install
foreman start
```

## Explanation
In addition to `webpacker` and `foreman` gems, the above commands will install the `filemanager` npm package. Foreman allows us to start both the Rails server and the Webpack server with one command. This contains all the Figgy Filemanager Vue components. These components can be rearranged according to your needs in the `app/javascript/app.vue` file. You can bypass the styles provided by including your own styles via the asset pipeline and removing the `stylesheet_pack_tag` from `app/views/filemanager/index.html.erb`.

## Components
Figgy Filemanager is currently comprised of the following components:

### Gallery
The Gallery component is the scrollable div in the top left corner. It contains all the draggable thumbnail images and the gallery toolbar.

### Detail
The Detail component is simply a larger preview of any image that is selected. When multiple
images are selected, nothing will show here. It's likely that we will include an alternate
component at some point in the future to accommodate deep zoom (something like Detail-OSD).
You can choose which one to import and only the imported components will be built, reducing
unnecessary bloat.

### Panel
The Panel component contains the forms for labeling the images and setting the start page
and thumbnails. You can label single pages, or "auto-label" multiple pages at a time. Auto-labeling can be done with standard (arabic) numerals or Roman numerals.

### Controls
The control panel houses the Save button, some state indicators, and ultimately the `undo` and `redo` buttons.

## Selection of images
Images are selected by clicking on them. You can select multiple images in a row by selecting one and then holding Shift and clicking another image. You can also select a la carte multiple images by holding the Command button and clicking images.

## Rearranging of images
Images can be dragged around the gallery window to reorder them. If you need to reorder multiple images at once, or it's cumbersome to drag and image from the beginning to the end you can cut/copy and paste (see Key Commands below for details).

## Key commands
(Not implemented yet)
Ctrl-C = copy selected images
Ctrl-X = cut selected images
Ctrl-V = paste copied/cut images after last currently selected image
(The above are also available via Right+Click context menu.)

Ctrl-Z = undo
Ctrl+Shift-Z = redo
Ctrl-S = save
(The above commands are also available via buttons in the Controls panel.)
