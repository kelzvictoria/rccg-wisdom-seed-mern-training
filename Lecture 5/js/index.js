let firstP = document.getElementById("first_paragraph");
let secondP = document.getElementById("second_paragraph");

let firstImg = document.getElementById("first_img");
let secondImg = document.getElementById("second_img");

let body = document.getElementById("body");

let firstHeading = document.getElementById("first_heading");
let secondHeading = document.getElementById("second_heading");

let changePBtn = document.getElementById("change_p");
let changeImgBtn = document.getElementById("change_img");
let changeBgColorBtn = document.getElementById("change_bg");
let hideHeadingsBtn = document.getElementById("change_headings");
let showHeadingsBtn = document.getElementById("show_headings");

function getNum(num) {

}

function changeParagraph() {
    firstP.innerHTML = "Hello!"
    secondP.innerHTML = "Welcome"
}

function changeImgSrc() {
    firstImg.src = "imgs/black-fam.jpg"
    secondImg.src = "imgs/black-fam.jpg"
}

function changeBgColor() {
    body.style.backgroundColor = "red";
}

function hideHeadings() {
    firstHeading.style.display = "none";
    secondHeading.style.display = "none";
}

function showHeadings() {
    firstHeading.style.display = "block";
    secondHeading.style.display = "block";
}

changePBtn.onclick = changeParagraph;
changeImgBtn.onclick = changeImgSrc;
changeBgColorBtn.onclick = changeBgColor;
hideHeadingsBtn.onclick = hideHeadings;
showHeadingsBtn.onclick = showHeadings;



function addNum() {
    let first = document.getElementById("one").value;
    let second = document.getElementById("two").value;
    let answerBox = document.getElementById("answer")

    let answer;
    console.log("here");
    answer = parseInt(first) + parseInt(second);
    console.log(first, second, answer);
    answerBox.value = answer
}


document.getElementById("equals").onclick = addNum;