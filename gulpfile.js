var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');


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

gulp.task('minifyScripts', ['JSbrowserify'], function() {
    return gulp.src('./build/js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'))
});

gulp.task('JShint', function() {
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('jsBuild', ['JSbrowserify', 'JShint'], function() {
    browserSync.reload();
})