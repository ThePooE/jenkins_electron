'use strict';
var fs = require('fs');

console.log(`EXPORT: Exporting package properties..`);

const propertiesPath = `../`;
const propertiesFile = `package-properties.txt`;

const version = `version=`+(JSON.parse(fs.readFileSync('./package.json'))).version;
const newline = `\n`;
const platform = `platform=`+``;

let directory = propertiesPath + propertiesFile;
let output = version + newline + platform;
console.log(output);

fs.writeFile(directory, output, (err) => {
    if (err) throw err;
    console.log(`EXPORT: ERROR!`);
});

console.log(`EXPORT: Properties exported!`);