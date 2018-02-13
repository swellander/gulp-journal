var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');


gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './',
            index: 'index.html'
        }
    })

    gulp.watch(['js/*.js'], ['jsBuild']);
});

gulp.task('concatInterface', function() {
    return gulp.src(['./js/journal-interface.js'])
        .pipe(concat('allConcat.js'))
        .pipe(gulp.dest('./tmp'));
});

gulp.task('JSbrowserify', ['concatInterface'], function() {
    return browserify( {entries: ['./tmp/allConcat.js']} )
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('jsBuild', ['JSbrowserify'], function() {
    browserSync.reload();
})