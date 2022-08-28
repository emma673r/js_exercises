const bool = true;
const num = 41;
const str = "Peter";
const obj = {
  cats: 1,
  kids: 1,
};
const nothing = null;
let undf;
const sym = Symbol("symbol");

// slide 10
console.log("bool type : ", bool);
console.log("num type : ", num);
console.log("str type : ", str);
console.log("obj type : ", obj);
console.log("nothing type : ", nothing);
console.log("undf type : ", undf);
console.log("sym type : ", sym);

// slide 11
console.log("bool type : ", typeof bool);
console.log("num type : ", typeof num);
console.log("str type : ", typeof str);
console.log("obj type : ", typeof obj);
console.log("nothing type : ", typeof nothing);
console.log("undf type : ", typeof undf);
console.log("sym type : ", typeof sym);

// slide 13

// "use strict";

// num = 17;
// console.log(num);

// doesnt work ? don't see a diffenrent result