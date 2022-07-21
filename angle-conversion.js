let inputDegree = document.querySelector("#input-degree");
let outputRadians = document.querySelector("#output-radians");

let inputRadians = document.querySelector("#input-radians");
let outputDegree = document.querySelector("#output-degree");

let btnDegToRad = document.querySelector("#btn-deg-rad");
let btnRadToDeg = document.querySelector("#btn-rad-deg");
let btnConvertDeg = document.querySelector("#btn-convert-deg");
let btnConvertRad = document.querySelector("#btn-convert-rad");
let sectionDegToRad = document.querySelector("#section-deg-rad");
let sectionRadToDeg = document.querySelector("#section-rad-deg");

sectionDegToRad.style.display = "none";
sectionRadToDeg.style.display = "none";

function convertDegToRad() {
    sectionDegToRad.style.display = "block";
    sectionRadToDeg.style.display = "none";
    btnConvertDeg.addEventListener("click", convertDeg)
}

function convertDeg() {
    let radians = 0;
    radians = Number(inputDegree.value) * (Math.PI / 180);
    outputRadians.innerText = radians;
}

function convertRadToDeg() {
    sectionDegToRad.style.display = "none";
    sectionRadToDeg.style.display = "block";
    btnConvertRad.addEventListener("click", convertRad)
}

function convertRad() {
    let degree = 0;
    degree = Number(inputRadians.value) * (180 / Math.PI);
    outputDegree.innerText = degree;
}

btnDegToRad.addEventListener("click", convertDegToRad);
btnRadToDeg.addEventListener("click", convertRadToDeg);
