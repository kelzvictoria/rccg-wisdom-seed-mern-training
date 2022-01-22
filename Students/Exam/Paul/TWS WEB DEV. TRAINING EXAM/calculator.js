// Additional Function
function addNumbers(){
let first = document.getElementById("first").value;
let second = document.getElementById("second").value;
let answerBox = document.getElementById("addAnswer");

let answer = parseInt(first) + parseInt(second);
answerBox.value = answer;
}

// Subtraction Function
function subtractNumbers(){
let third = document.getElementById("third").value;
let fourth = document.getElementById("fourth").value;
let answerBox = document.getElementById("minusAnswer");

let answer = parseInt(third) - parseInt(fourth);
answerBox.value = answer;
}

// Multiplication Function
function multiplyNumbers(){
let fifth = document.getElementById("fifth").value;
let sixth = document.getElementById("sixth").value;
let answerBox = document.getElementById("multiAnswer");

let answer = parseInt(fifth) * parseInt(sixth);
answerBox.value = answer;
}

// Divisional Function
function divideNumbers(){
let seventh = document.getElementById("seventh").value;
let eight = document.getElementById("eight").value;
let answerBox = document.getElementById("divideAnswer");

let answer = parseInt(seventh) / parseInt(eight);
answerBox.value = answer;
}

// Button functions
document.getElementById("Sum").onclick = addNumbers;
document.getElementById("Minus").onclick = subtractNumbers;
document.getElementById("Times").onclick = multiplyNumbers;
document.getElementById("Divide").onclick = divideNumbers;