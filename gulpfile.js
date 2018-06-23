var myPath = require('path');

var myGulp = require('gulp');
var mySCSS = require('gulp-sass');

var mySrc = {
  myPathToSCSS: myPath.resolve(__dirname, 'lesson7', 'src', 'scss', '**/*.+(scss|sass)') // gulp.src('src/scss/styles.scss')
};
var myDest = {
  myPathToCSS: myPath.resolve(__dirname, 'lesson7', 'src', 'css') // .pipe(gulp.dest('src/css'))
};

myGulp.task('myTaskSCSS', function () {
  return myGulp.src(mySrc.myPathToSCSS)
    .pipe(mySCSS())
    .pipe(myGulp.dest(myDest.myPathToCSS))
});

myGulp.task('myTaskWatch', function () {
  myGulp.watch(mySrc.myPathToSCSS, ['myTaskSCSS'])
});