function addNumbers () {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let answerBox = document.getElementById("answer");
    let sum = parseInt(first) + parseInt(second);
    answerBox.value = sum;
  }
  
  document.getElementById("equals").onclick =addNumbers;
  document.getElementById("equals1").onclick =subtractNumbers;