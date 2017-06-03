// Required plugins
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');

// Default task that runs with the 'gulp' command
// Compile SCSS code into main.css
gulp.task('default', function() {
    gulp.src('styles/main.scss')
        .pipe(sass({style: 'expanded'}))
        .on('error', gutil.log)
        .pipe(gulp.dest('styles'))
});
