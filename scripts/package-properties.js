'use strict';
var fs = require('fs');

console.log(`INFO: Exporting package properties..`);
let pkg = JSON.parse(fs.readFileSync('./package.json'));
/*****************************************************************************/
const propertiesPath = ``;
const propertiesFile = `package-properties.json`;
let directory = propertiesPath + propertiesFile;
/*****************************************************************************/
var obj = {};
var outputJSON;
var items = ['version', 'platform'];

items.forEach(function(item) {
    obj[item] = pkg[item];
})

outputJSON = JSON.stringify(obj);
/*****************************************************************************/
fs.writeFile(directory, outputJSON, (err) => {
    if (err) throw err;
});
/*****************************************************************************/
console.log(`INFO: Properties exported!`);