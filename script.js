var count = 9;
var currentImg;
function createImg(){
     var parent = document.getElementById("str");
     for (var i = 1; i <= count; i++){
        var divImg = document.createElement('div');
        divImg.setAttribute("class", "miniImg");
        divImg.setAttribute("onclick", "OpenImg(" + i + ")");
        divImg.style.backgroundImage = "url(" + i + ".jpg)";
        parent.appendChild(divImg);
        }
}
createImg();

function OpenImg(i){
    currentImg = i;
    var img = i + ".jpg";
    var image = document.getElementById("imgBig");
    image.setAttribute("src", img);
    var bigBlock = document.getElementById("bigBlock");
    bigBlock.style.display = "block";
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
