var i = 0; //starting point
var images = [];
var time = 3000;

//image list
images[0] = 'image1.jpg';
images[1] = 'image2.jpg';
images[2] = 'image3.jpg';
images[3] = 'image4.jpg';

//change Image
function changeImg(){
    document.hasChildNodes.src = images[i];

    if(i < images.length -1) {
        i++;
    } else {
        i = 0;

setTimeout("changeImg()", time);
window.onload = changeImg;    }
}