/// <binding />
var gulp = require('gulp');

var source = require('vinyl-source-stream');
var browserify = require('browserify');
var tsify = require('tsify');
var tslint = require('gulp-tslint');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-connect');

var config = {
    publicPath: './www/scripts',
    app: {
        path: 'scripts',
        main: 'index.ts',
        result: 'appBundle.js'
    }
};

gulp.task('default', ['watch', 'livereload']);

gulp.task('build-js', function () {
    return gulp.src('scripts/**/*.js')
      .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        //only uglify if gulp is ran with '--type production'
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('www/scripts'));
});

gulp.task('livereload', function () {
    livereload.server({
        livereload: true
    });
});

gulp.task('bundle', function () {
    //var bundler = browserify()
    //    .add(config.app.path + '/' + config.app.main)
    var bundler = browserify({
        entries: './scripts/index.ts',
        extensions: ['.ts'],
        debug: true
    })
        .plugin(tsify);

    return bundler.bundle()
        .pipe(source(config.app.result))
        .pipe(gulp.dest(config.publicPath))
        .pipe(livereload.reload());;
});

gulp.task('tslint', function () {
    return gulp.src('scripts/*.ts')
    .pipe(tslint({
        formatter: "verbose"
    }))
    .pipe(tslint.report());
});

//gulp.task('sourse-maps', function () {
//    return gulp.src('scripts/*.ts')
//      .pipe(sourcemaps.init())  // Process the original sources
//      .pipe(sourcemaps.write()) // Add the map to modified source.
//      .pipe(gulp.dest('www/scripts/appBundle.js.map'));
//});

gulp.task('watch', function () {
    gulp.watch('scripts/*.ts', ['tslint', 'bundle']);
    gulp.watch('*.html', ['tslint', 'bundle']);
});