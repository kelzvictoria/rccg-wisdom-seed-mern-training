
  function subtractNumbers () {
    let first = document.getElementById("first1").value;
    let second = document.getElementById("second1").value;
    let answerBox = document.getElementById("answer1");
    let subtract = parseInt(first) - parseInt(second);
    answerBox.value = subtract;
  }
  
  
  document.getElementById("equals").onclick =addNumbers;
  document.getElementById("equals2").onclick =subtractNumbers;