"use strict";

let hex;
let RGBstring;
let r;
let g;
let b;

function convertHexToRGB(hex) {
  if (!hex.startsWith("#") && hex.length !== 7) {
    console.log(`This is not a hex code, check hex value`);
  } else {
    r = hex.substring(1, 3).toUpperCase().toString();
    g = hex.substring(3, 5).toUpperCase().toString();
    b = hex.substring(5).toUpperCase().toString();

    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);

    // console.log(r);
    // console.log(g);
    // console.log(b);
  }
}

convertHexToRGB("#bada5");

function convertRGBstringToRGB(RGBstring) {
  if (RGBstring.startsWith("rgb(") && RGBstring.endsWith(")")) {
    let startRgbValue = RGBstring.indexOf("(");
    let endRgbValue = RGBstring.indexOf(")");

    RGBstring = RGBstring.substring(startRgbValue + 1, endRgbValue);
    let RGBarray = RGBstring.split(",");
    r = parseInt(RGBarray[0].trim());
    g = parseInt(RGBarray[1].trim());
    b = parseInt(RGBarray[2].trim());
    // console.log(r);
    // console.log(g);
    // console.log(b);
  } else {
    console.log(`This is not an rgb string, check value`);
  }
}

convertRGBstringToRGB("rgb(133, 233, 333)");

function convertRGBToHex(r, g, b) {
  r = r.toString(16).toUpperCase();
  g = g.toString(16).toUpperCase();
  b = b.toString(16).toUpperCase();

  r = r.padStart(2, "0");
  g = g.padStart(2, "0");
  b = b.padStart(2, "0");

  hex = `#${r}${g}${b}`;

//   console.log(r);
//   console.log(g);
//   console.log(b);
  console.log(hex);
}

convertRGBToHex(475, 2, 222);
