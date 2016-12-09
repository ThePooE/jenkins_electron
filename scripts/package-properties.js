'use strict';
var fs = require('fs');

console.log(`INFO: Exporting package properties..`);
let pkg = JSON.parse(fs.readFileSync('./package.json'));
/*****************************************************************************/
const propertiesPath = ``;
const propertiesFile = `package-properties.txt`;
let directory = propertiesPath + propertiesFile;
/*****************************************************************************/
const version = `version=`+pkg.version;
const newline = `\n`;
const platform = `platform=`+pkg.platform;
let output = version + newline + platform;
//console.log(output);
/*****************************************************************************/
fs.writeFile(directory, output, (err) => {
    if (err) throw err;
});
/*****************************************************************************/
console.log(`INFO: Properties exported!`);