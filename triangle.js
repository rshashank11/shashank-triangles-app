let inputAngle = document.querySelectorAll(".input-angle");
let btnCheck = document.querySelector("#btn-check");

function calculateAngles() {
    console.log(inputAngle.values);
}

btnCheck.addEventListener("click", calculateAngles);