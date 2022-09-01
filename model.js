"use strict";
const model = ["peter", "mary", "jane"];
const h2Names = document.querySelector("#names");
const inputName = document.querySelector("#name");
const button = document.querySelector("button");

// controller


init();
function init() {
  button.addEventListener("click", buttonClick);
  updateView();
}

function addNameToModel(name) {
    model.push(name);
}

function updateView() {
    h2Names.textContent = model.join(" ");
}

// view

function buttonClick() {
    addNameToModel(inputName.value);
    updateView();
}


