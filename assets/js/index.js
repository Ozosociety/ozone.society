var i = 0; // Start point
var images = [];
var time = 3000;

// Image List
images[0] = 'group/image1.jpg';
images[1] = 'group/image2.jpg';
images[2] = 'group/image3.jpg';
images[3] = 'group/image4.png';
images[4] = 'group/image5.jpg';

// Change Image
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;
