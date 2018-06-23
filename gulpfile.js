var myPath = require('path');

var myGulp = require('gulp');
var mySCSS = require('gulp-sass');
var myBrowserSync = require('browser-sync');
var myMinifyCSS = require('gulp-minify-css');
var myUserefForJS = require('gulp-useref');
var myUglifyJS = require('gulp-uglify');

var mySrc = {
  myPathToSCSS: myPath.resolve(__dirname, 'lesson7', 'src', 'scss', '**/*.+(scss|sass)'), // gulp.src('src/scss/styles.scss')
  myPathToHTML: myPath.resolve(__dirname, 'lesson7', '*.html'),
  myPathToJS: myPath.resolve(__dirname, 'lesson7', 'src', 'js', '**/*.js')
};
var myDest = {
  myPathToCSS: myPath.resolve(__dirname, 'lesson7', 'src', 'css'), // .pipe(gulp.dest('src/css'))
  myDestPathToJS: myPath.resolve(__dirname, 'lesson7', 'src', 'js')
};

myGulp.task('myTaskSCSS', function () {
  return myGulp.src(mySrc.myPathToSCSS)
    .pipe(mySCSS())
    .pipe(myMinifyCSS())
    .pipe(myGulp.dest(myDest.myPathToCSS))
    .pipe(myBrowserSync.reload({
      stream: true
    }))
});

myGulp.task('myTaskUserefForJS', function () {
  var userefAssets = myUserefForJS.assets();
  return myGulp.src(mySrc.myPathToHTML)
    .pipe(userefAssets)
    .pipe(myUglifyJS())
    .pipe(userefAssets.restore())
    .pipe(myUserefForJS())
    .pipe(myGulp.dest(myDest.myDestPathToJS))
});

myGulp.task('myBrowserSync', function () {
  myBrowserSync({
      server: {
        baseDir: myPath.resolve(__dirname, 'lesson7')
      }
  })
});

myGulp.task('myTaskWatch', ['myBrowserSync'], function () {
  myGulp.watch(mySrc.myPathToSCSS, ['myTaskSCSS']);
  myGulp.watch(mySrc.myPathToJS, ['myTaskUserefForJS']);
  myGulp.watch(mySrc.myPathToHTML, myBrowserSync.reload);
  myGulp.watch(mySrc.myPathToJS, myBrowserSync.reload)
});