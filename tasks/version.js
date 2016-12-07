'use strict';

var gulp = require('gulp');
var fs = require('fs');

const versionFile = 'version.txt';

gulp.task('version', function () {
    let pkg = (JSON.parse(fs.readFileSync('./package.json')));
    let version = pkg.version;

    fs.writeFile(versionFile, version, (err) => {
        if (err) throw err;
    });
});
