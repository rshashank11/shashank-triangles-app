let inputAngle = document.querySelectorAll(".input-angle");
let btnCheck = document.querySelector("#btn-check");
let outputResult = document.querySelector("#output-result");
let errorMessage = document.querySelector("#error");

function inputCheck() {
    errorMessage.style.display = "none";
    outputResult.style.display = "none";
    let checkResult = false;
    for(let i = 0; i < inputAngle.length; i++) {
        if(inputAngle[i].value === "") {
            checkResult = false;
        } else {
            checkResult = true;
        }
    }

    if(checkResult === true) {
        sumOfAngles();
    } else {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Please type an angle!";
    }
}

function sumOfAngles() {
    let sum = 0;
    for(let i = 0; i < inputAngle.length; i++) {
        sum += Number(inputAngle[i].value);
    }
    checkSumOfAngles(sum);
}

function checkSumOfAngles(sum) {
    outputResult.style.display = "block";
    if(sum === 180) {
        outputResult.innerText = "Yes. The three entered angles form a triangle.";
    } else {
        outputResult.innerText = "Nope. The three entered angles don't form a triangle"
    }
}

btnCheck.addEventListener("click", inputCheck);