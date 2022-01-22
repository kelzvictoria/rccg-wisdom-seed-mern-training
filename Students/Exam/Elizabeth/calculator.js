function addNumbers () {
    let first = document.getElementById("add1").value;
    let second = document.getElementById("add2").value;
    let answerBox = document.getElementById("ans1");
    let add = parseInt(first) + parseInt(second);
    answerBox.value = add;
}

function subtractNumbers () {
    let first = document.getElementById("subtract1").value;
    let second = document.getElementById("subtract2").value;
    let answerBox = document.getElementById("ans2");
    let subtract = parseInt(first) - parseInt(second);
    answerBox.value = subtract;
}

function mutiplyNumbers () {
    let first = document.getElementById("mutiply1").value;
    let second = document.getElementById("mutiply2").value;
    let answerBox = document.getElementById("ans3");
    let mutiply = parseInt(first) * parseInt(second);
    answerBox.value = mutiply;
}

function divideNumbers () {
    let first = document.getElementById("divide1").value;
    let second = document.getElementById("divide2").value;
    let answerBox = document.getElementById("ans4");
    let divide = parseInt(first) / parseInt(second);
    answerBox.value = divide;
}

document.getElementById("equal1").onclick =addNumbers;
document.getElementById("equal2").onclick =subtractNumbers;
document.getElementById("equal3").onclick =mutiplyNumbers;
document.getElementById("equal4").onclick =divideNumbers;