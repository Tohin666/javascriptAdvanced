var myPath = require('path');

var myGulp = require('gulp');
var mySCSS = require('gulp-sass');
var myBrowserSync = require('browser-sync');
var myMinifyCSS = require('gulp-minify-css');
var myUserefForJS = require('gulp-useref');
var myUglifyJS = require('gulp-uglify');

var mySrc = {
  myPathToSCSS: myPath.resolve(__dirname, 'lesson7', 'src', 'scss', '**/*.+(scss|sass)'), // gulp.src('src/scss/styles.scss')
  myPathToHTML: myPath.resolve(__dirname, 'lesson7', 'src', '*.html'),
  myPathToJS: myPath.resolve(__dirname, 'lesson7', 'src', 'js', '**/*.js')
};
var myDest = {
  myPathToCSS: myPath.resolve(__dirname, 'lesson7', 'dist', 'css'), // .pipe(gulp.dest('src/css'))
  myDestPath: myPath.resolve(__dirname, 'lesson7', 'dist')
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

  return myGulp.src(mySrc.myPathToHTML)

    // .pipe(myUglifyJS())

    .pipe(myUserefForJS())
    .pipe(myGulp.dest(myDest.myDestPath))
});

myGulp.task('myBrowserSync', function () {
  myBrowserSync({
      server: {
        baseDir: myPath.resolve(__dirname, 'lesson7', 'src')
      }
  })
});

myGulp.task('myTaskWatch', ['myBrowserSync'], function () {
  myGulp.watch(mySrc.myPathToSCSS, ['myTaskSCSS']);
  myGulp.watch(mySrc.myPathToJS, ['myTaskUserefForJS']);
  myGulp.watch(mySrc.myPathToHTML, myBrowserSync.reload);
  myGulp.watch(mySrc.myPathToJS, myBrowserSync.reload)
});