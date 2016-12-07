'use strict';

var gulp = require('gulp');
var fs = require('fs');

gulp.task('version', function () {
    let pkg = (JSON.parse(fs.readFileSync('./package.json')));
    let version = console.log(pkg.version);
});
