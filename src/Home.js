let currImage = 1;
updateImage(currImage);

function updateImage(x){
    currImage += x;
    let images = document.getElementsByClassName("slide");
    if (currImage > images.length) {
        currImage = 1;
    }
    if (currImage < 1) {
        currImage = images.length;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[currImage-1].style.display = "block";
}
