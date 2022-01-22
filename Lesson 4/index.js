function changeContent() {
    document.getElementById("demo").innerHTML = "Yo!"
}

function changeImgSrc() {
    document.getElementById("img").src = "https://scontent.flos1-1.fna.fbcdn.net/v/t1.6435-9/37573104_1777543979008830_7751430364479881216_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFpVRFm-DwQeHnvtdgog-T1lpvEnw2RASqWm8SfDZEBKuZf4m5DvcWZ_p5KTEhD_nbcwyn18hOxTpSjMvkyv1n4&_nc_ohc=7hmkgB7Whp8AX_u19cO&_nc_ht=scontent.flos1-1.fna&oh=88c7b6566a8fc4d523d0aadd07cd54ce&oe=60DEDD33"
}

function changeBackground() {
    document.getElementById("body").style.backgroundColor = "blue"
}

function hideElement() {
    document.getElementById("demo").style.display = "none"
}

function showElement() {
    document.getElementById("demo").style.display = "block"
}

document.getElementById("change-content").onclick = changeContent;
document.getElementById("change-img").onclick = changeImgSrc;
document.getElementById("change-background").onclick = changeBackground;
document.getElementById("hide-element").onclick = hideElement;
document.getElementById("show-element").onclick = showElement;