function addNumbers() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value
    let answerBox = document.getElementById("plus_answer");

    let sum = parseInt(first) + parseInt(second);
    answerBox.value = sum;
}

function subtractNumbers() {
    let third = document.getElementById("third").value;
    let fourth = document.getElementById("fourth").value
    let answerBox = document.getElementById("minus_answer");

    let sum = parseInt(third) - parseInt(fourth);
    answerBox.value = sum;
}

function multiplyNumbers() {
    let fifth = document.getElementById("fifth").value;
    let sixth = document.getElementById("sixth").value
    let answerBox = document.getElementById("times_answer");

    let sum = parseInt(fifth) * parseInt(sixth);
    answerBox.value = sum;
}

function divideNumbers() {
    let seventh = document.getElementById("seventh").value;
    let eight = document.getElementById("eight").value
    let answerBox = document.getElementById("divide_answer");

    let sum = parseInt(seventh) / parseInt(eight);
    answerBox.value = sum;
}

document.getElementById("plus_equals").onclick = addNumbers;
document.getElementById("minus_equals").onclick = subtractNumbers;
document.getElementById("times_equals").onclick = multiplyNumbers;
document.getElementById("divide_equals").onclick = divideNumbers;