"use strict";

let hex;
let r;
let g;
let b;

function convertHexToRGB(hex) {
  if (hex != hex.startsWith("#") && hex.length != 7) {
    console.log(`This is not a hex code, check hex value`);
  } else {
    r = hex.substring(1,3).toUpperCase().toString();
    g = hex.substring(3, 5).toUpperCase().toString();
    b = hex.substring(5).toUpperCase().toString();

    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);

    console.log(r);
    console.log(g);
    console.log(b);
  }
}

convertHexToRGB("#bada55");
