const globalModulesPath = require("global-modules-path");
const cliPath = globalModulesPath.getPath("nativescript", "tns");
//const cliPath = "C:\\work\\nativescript-cli";//add path to local cli
const fs = require("fs");

const packageJson = fs.readFileSync(".\\demo\\package.json").toString();
const nsconfigJson = fs.readFileSync(".\\demo\\nsconfig.json").toString();


var start = new Date();
cli = require(cliPath);
projectData = cli.projectDataService.getProjectDataFromContent(packageJson, nsconfigJson);
const appPath = projectData.getAppDirectoryRelativePath();
const resPath = projectData.getAppResourcesRelativeDirectoryPath();
var end = new Date() - start;

console.log(end);
console.log(appPath);
console.log(resPath);