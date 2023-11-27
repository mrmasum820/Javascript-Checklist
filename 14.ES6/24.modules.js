// common js module system -> node js
// umd -> universal module defination(ES6 module system for browser)

import Rectangle from "./Rectangle";
import * as func from './func'
import { add, divi } from './func' //if we need to some function from any folder where are a lot of functions

let r = new Rectangle('Green', 10, 20)
console.log(r);
r.draw()


//imported from func file
console.log(func); //object
console.log(func.add(10, 20)); //30
console.log(func.divi(100, 20)); //5