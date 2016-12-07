'use strict';

var fs = require('fs');

const versionFile = 'version.txt';

let pkg = (JSON.parse(fs.readFileSync('./package.json')));
let version = pkg.version;

fs.writeFile(versionFile, "version="+version, (err) => {
    if (err) throw err;
});
