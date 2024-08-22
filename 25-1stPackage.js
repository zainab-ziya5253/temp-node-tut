//npm i lodash
//using package lodash
const _ = require('lodash')//ext package lodash

const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)