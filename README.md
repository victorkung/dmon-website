# Yeogurt-Starter readme

Generated on 2015-12-28 using
[generator-yeogurt@1.4.0](https://github.com/larsonjj/generator-yeogurt)

## Description

Starter Files created by Victor Kung to quickly set up Yeogurt projects. This configuration of Yeogurt includes the following responses to the initial configuration questions:

  - Which HTML preprocessor would you like to use? Jade
  - What JavaScript preprocessor would you like to use? None
  - What would you like to use to write styles? Sass
  - What Sass syntax would you like to use ? Scss
  - Which JavaScript testing framework would you like to use? None

External Libraries include:

  - Bootstrap (only the Layout/Grid)
  - Slick.JS Carousel
  - Magnific Popup

Files Modified:

  - main.scss
  - utilities.scss

In order to rename the project just do a find and replace all on the phrase: "yeogurt-starter"


## Technologies used

JavaScript
- [Browserify](http://browserify.org/)
- [Node](https://nodejs.org/)

Styles
- [Sass](http://sass-lang.com/) via ([node-sass](https://github.com/sass/node-sass))

Markup
- [Jade](http://jade-lang.com/)

Optimization
- [Imagemin](https://github.com/imagemin/imagemin)
- [Uglify](https://github.com/mishoo/UglifyJS)

Server
- [BrowserSync](http://www.browsersync.io/)

Linting
- [ESlint](http://eslint.org/)

Automation
- [Gulp](http://gulpjs.com)

Code Management
- [Editorconfig](http://editorconfig.org/)
- [Git](https://git-scm.com/)


## Automated tasks

This project uses [Gulp](http://gulpjs.com) to run automated tasks for development and production builds.
The tasks are as follows:

`gulp --production`: Same as `gulp serve --production` also run `gulp test` and  not boot up production server

`gulp serve`: Compiles preprocessors and boots up development server
`gulp serve --open`: Same as `gulp serve` but will also open up site/app in your default browser
`gulp serve --production`: Same as `gulp serve` but will run all production tasks so you can view the site/app in it's final optimized form

`gulp test`: Lints all `*.js` file in the `source` folder using eslint

***Adding the `--debug` option to any gulp task displays extra debugging information (ex. data being loaded into your templates)***
