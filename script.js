var slider_img = document.querySelector('.slider-image');
var images = ['img1.jpg', 'img2.jpg', 'img3.webp', 'img4.jpg', 'img5.jpg', 'img6.webp'];
var i = 0; // current image index
var rev;


//Previous function
function prev() {
  if (i <= 0) // if 'i' is less of equall to zero (void), 
    i = images.length; // 'i' is refer as img.lenght
  i--; // concatinate 'i' (decrement)
  return setImg();
}


// Next function
function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return slider_img.setAttribute('src', 'images/' + images[i]);
}