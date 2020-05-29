var myImg = Array.from(document.querySelectorAll(".item img"));
var layoutContainer = document.getElementById("layout-container");
var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var imgIndex ;
for(var i=0 ; i<myImg.length ; i++)
{
    myImg[i].addEventListener("click" , showbox);
    close.addEventListener("click" , closebox);
};

function showbox(e) {
    layoutContainer.style.transform = "scale(1,1)";
    layoutContainer.firstElementChild.style.transform = "scale(1,1)";

    var imgSrc = e.target.src;
    imgIndex = myImg.indexOf(e.target);
    layoutContainer.firstElementChild.style.backgroundImage = "url("+imgSrc+")";

};
function closebox() {
    layoutContainer.style.transform = "scale(0,0)";
    layoutContainer.firstElementChild.style.transform = "scale(0,0)"

};

next.addEventListener("click", goNext);
prev.addEventListener("click", goPrev);

function goNext(){
    imgIndex++;
    if( imgIndex<myImg.length ) {
        layoutContainer.firstElementChild.style.backgroundImage = "url("+myImg[imgIndex].src+")";
    } else{
        imgIndex = 0
    }
};
function goPrev(){
    imgIndex--;
    layoutContainer.firstElementChild.style.backgroundImage = "url("+myImg[imgIndex].src+")";
    if(imgIndex == 0){
        imgIndex = myImg.length;
    }
};

