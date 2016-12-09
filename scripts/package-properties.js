'use strict';
var fs = require('fs');

console.log(`INFO: Exporting package properties..`);
let pkg = JSON.parse(fs.readFileSync('./package.json'));
/*****************************************************************************/
const propertiesPath = ``;
const propertiesFile = `package-properties.txt`;
let directory = propertiesPath + propertiesFile;
/*****************************************************************************/
var jsonObject = {
    "version": pkg.version,
    "platform": pkg.pl
}
//console.log(output);
/*****************************************************************************/
fs.writeFile(directory, output, (err) => {
    if (err) throw err;
});
/*****************************************************************************/
console.log(`INFO: Properties exported!`);