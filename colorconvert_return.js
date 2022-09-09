"use strict";

let hex;
let RGBstring;
let r;
let g;
let b;

function convertHexToRGB(hex) {
  r = hex.substring(1, 3).toUpperCase().toString();
  g = hex.substring(3, 5).toUpperCase().toString();
  b = hex.substring(5).toUpperCase().toString();

  r = parseInt(r, 16);
  g = parseInt(g, 16);
  b = parseInt(b, 16);

  return {r, g, b};
}

console.log(convertHexToRGB("#bada5"));

function convertRGBToHex(r, g, b) {
  r = r.toString(16).toUpperCase();
  g = g.toString(16).toUpperCase();
  b = b.toString(16).toUpperCase();

  r = r.padStart(2, "0");
  g = g.padStart(2, "0");
  b = b.padStart(2, "0");

  hex = `#${r}${g}${b}`;

return hex;
}

console.log(convertRGBToHex(475, 2, 222));
