//common JS, every file is module (by default)
//Modules - Encapsulated Code (onlyi minimum)
//Modules

const names = require("./4-names");
const sayHi = require("./5-utils");

const data = require("./6-alternative-flavor");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
