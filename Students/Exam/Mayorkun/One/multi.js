function subtractNumbers () {
    let first = document.getElementById("second").value;
    let third = document.getElementById("third").value;
    let answerBox = document.getElementById("answer2");
    let multiply = parseInt(second)* parseInt(third);
    answerBox.value = multiply;
  }
  
  document.getElementById("equals").onclick =subNumbers;
  document.getElementById("equals3").onclick =multiNumbers;