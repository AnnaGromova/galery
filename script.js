var count = 9;
var currentImg;
function createImgs(){
     var parent = document.getElementById("str");
     for (var i = 1; i <= count; i++){
        var divImg = document.createElement('div');
        divImg.setAttribute("class", "miniImg");
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
    currentImg.setAttribute("onclick", "OpenImg(" + i + ")");
}

function OpenImg(i){
    currentImg = i;
    var img = i + ".jpg";
    var image = document.getElementById("imgBig");
    image.setAttribute("src", img);
    var bigBlock = document.getElementById("bigBlock");
    bigBlock.style.display = "block";
    img.setAttribute("onload", "slideLoad(" + i + ")");
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
    }
}

function PreviousImg() {
    if (currentImg != 1){
        currentImg--;
        var image = document.getElementById("imgBig");
        image.setAttribute("src", currentImg + ".jpg");
    }
}

function CloseImg() {
    var block = document.getElementById("bigBlock");
    block.style.display = "none";
}
