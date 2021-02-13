var image = document.querySelector('#expandedImg');
function ShowImage(imgClicked){
    
var imgContainer = document.querySelector('#expandedDiv');

    imgContainer.style.display = "block"
    image.src = imgClicked.src;
}

var pictureList = ["eggs.jpg", "burger.jpg", "pizza.jpg", "noodles.jpg", "cake.jpg", "oranges.jpg"]
var leftBTN = document.querySelector('fa-chevron-left');
var rightBTN = document.querySelector('fa-chevron-right');
var index = 0;

function leftBtnClick(){
    index--;
    if(index<1){
        image.src = pictureList[0];
        index=0;
    }
    else{
    image.src = pictureList[index];
}
}

function rightBtnClicked(){
    index++;
    if(index>5){
        image.src = pictureList[5];
        index=5;
    }
    else{
    image.src = pictureList[index];
}
}

