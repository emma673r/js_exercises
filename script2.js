"use strict";

// slide 6
const n1 = 1;
const n2 = 2;

const s1 = "1";
const s2 = "2";

n1 + n2;
s1 + s2;

n1 + s2;
s1 + n2;

console.log(`n1 + n2 = `, n1 + n2);
console.log(`s1 + s2 = `, s1 + s2);
console.log(`n1 + s2 = `, n1 + s2);
console.log(`s1 + n2 = `, s1 + n2);

// slide 8
console.log(`slide 8`);
console.log(`"" + 1 + 0 = `, "" + 1 + 0);
console.log(`"" - 1 + 0 = `, "" - 1 + 0);
console.log(`true + false = `, true + false);
console.log(`6 / "3" = `, 6 / "3");
console.log(`"2" * "3" = `, "2" * "3");
console.log(`4 + 5 + "px" = `, 4 + 5 + "px");
console.log(`"$" + 4 + 5 = `, "$" + 4 + 5);
console.log(`"4" - 2 = `, "4" - 2);
console.log(`"4px" - 2 = `, "4px" - 2);
console.log(`7 / 0 = `, 7 / 0);
console.log(`" -9 " + 5 = `, " -9 " + 5);
console.log(`" -9 " - 5 = `, " -9 " - 5);
console.log(`null + 1 = `, null + 1);
console.log(`undefined + 1 = `, undefined + 1);

// slide 11

// is truthy
let value = true;
value = "0";
value = "true";
value = "falsy";
value = 2;
value = {};
value = [];
value = Infinity;
value = 3.14;
value = " ";

// is falsy
value = false;
value = null;
value = undefined;
value = 0;
value = "";
value = NaN;
value = -0;

if (value) {
  console.log(`Value is truthy`);
} else {
  console.log(`Value is falsy`);
}

// slide 15

// is truthy
0 == "0";
0 == [];
// is falsy
"0" == [];

console.log(`0 == "0" is `, 0 == "0");
console.log(`0 == [] is `, 0 == []);
console.log(`"0" == [] is `, "0" == []);

