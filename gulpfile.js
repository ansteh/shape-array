var path = require('path');
var gulp = require('gulp');
var gutil = require("gulp-util");
var jasmine = require('gulp-jasmine');
var webpack = require('webpack');

var paths = {
  scripts: ['lib/**/*.js'],
  spec: 'test/spec/*.js'
};

gulp.task('test', function () {
	return gulp.src(paths.spec)
		.pipe(jasmine());
});

gulp.task('watch', ['test'], function() {
  gulp.watch(paths.scripts, ['test']);
});

gulp.task("webpack", function(callback) {
    webpack({
      entry: "./lib/index.js",
      output: {
        libraryTarget: "var",
        library: "shapeArray",
        path: path.resolve(__dirname, 'dist'),
        filename: "shape-array.min.js"
      },
      module: {
        loaders: [{
          exclude: /(node_modules|bower_components)/,
          test: /\.js$/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        }]
      },
      plugins: [
        new webpack.optimize.UglifyJsPlugin()
      ]
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({

        }));
        callback();
    });
});

gulp.task('default', ['watch']);
