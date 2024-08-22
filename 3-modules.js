//11 to 14.
//CommonJS, every file is module(by default)
// Modules - Encapsuletd Code(only share minimum)
// ./ move up 1 level
const names=require('./3.1-names');
const sayHi=require('./3.2-utils');
const altFlavour= require('./3.3-altFlavour');
require('./3.4-mind-grenade')
// console.log(altFlavour)

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
