// npm - global command, comes with node
// npm version -- version

// local dependency - use it only in this particular porject
// npm i <packageNames>
// global dependencey - use it in any project
// npm install -g <packageName>

// package.json - manifest file(stores important info abour project/ package)

// manual approach (create package.json in the root, create package.json in the root, create properties etc )
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);