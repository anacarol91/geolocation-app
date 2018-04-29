var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// gulp.task('default', function() {
//   return gulp.src('sass/*.scss')
//     .pipe(watch('sass/*.scss'))
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('dist'));
// });

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});