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

function removeName(name) {
  console.log(model.indexOf(name));
  model.splice(model.indexOf(name), 1);
  updateView();
}

function updateView() {
  // h2Names.textContent = model.join(" ");

  h2Names.innerHTML = "";
  model.forEach((each) => {
    h2Names.innerHTML += `<span class="clickname">${each}</span> `;
  });

  document.querySelectorAll(".clickname").forEach((span) => {
    span.addEventListener("click", clickSpan);
  });
}

// view

function buttonClick() {
  addNameToModel(inputName.value);
  updateView();
}

function clickSpan(event) {
  console.log(`clickSpan`, event.typeof);
  removeName(event.target.textContent);
}
