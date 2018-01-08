var count = 9;
var currentImg;
function createImgs(){
     var parent = document.getElementById("str");
     for (var i = 1; i <= count; i++){
        var divImg = document.createElement('div');
        divImg.setAttribute("class", "miniImg");
        divImg.setAttribute("onclick", "OpenImg(" + i + ")");
        var imgLoader = document.createElement('img');
        imgLoader.setAttribute("src", "img_loader.gif");
        imgLoader.setAttribute("class", "loader");
        var img = document.createElement('img');
        img.setAttribute("src", i + ".jpg");
        img.setAttribute("id", i);
        img.setAttribute("onload", "slideLoad(" + i + ")");
        img.style.display = "block";
        parent.appendChild(divImg);
        divImg.appendChild(imgLoader);
        divImg.appendChild(img);
        }
}
createImgs();

function slideLoad(i){
    var currentImg = document.getElementById(i);
    $("#" + i).prev().css("display","none");
    currentImg.style.opacity = "1";
}

function OpenImg(i){
    currentImg = i;
    var img = i + ".jpg";
    var image = document.getElementById("imgBig");
    image.setAttribute("src", img);
    var bigBlock = document.getElementById("bigBlock");
    bigBlock.style.display = "block";
    image.setAttribute("onload", "slideLoadBig()");
}

function slideLoadBig(){
    var currentImg = document.getElementById("imgBig");
    currentImg.style.opacity = "1";
    $("#imgBig").prev().css("display","none");
}

var imgWidth = 334;
var currentMargin = 0;

function Right(){
    if (currentMargin != (3 - count) * imgWidth){
        var parent = document.getElementById('str');
        var newMargin = currentMargin - imgWidth;
        currentMargin = newMargin;
        parent.style.marginLeft = newMargin + "px";
    }
}

function Left(){
    if (currentMargin != 0){
        var parent = document.getElementById('str');
        var newMargin = currentMargin + imgWidth;
        currentMargin = newMargin;
        parent.style.marginLeft = newMargin + "px";
    }
}

function NextImg() {
    if (currentImg != count){
        currentImg++;
        var image = document.getElementById("imgBig");
        image.setAttribute("src", currentImg + ".jpg");
        bigLoader();
    }
}

function PreviousImg() {
    if (currentImg != 1){
        currentImg--;
        var image = document.getElementById("imgBig");
        image.setAttribute("src", currentImg + ".jpg");
        bigLoader();
    }
}
function bigLoader() {
    var image = document.getElementById("imgBig");
    image.style.opacity = "0";
    $("#imgBig").prev().css("display","block");
    image.setAttribute("onload", "slideLoadBig()");
}

function CloseImg() {
    var block = document.getElementById("bigBlock");
    block.style.display = "none";
    bigLoader();
}
