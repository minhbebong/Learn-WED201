
function ChangeImage(img) {
    let image = document.getElementById('image');
    let src = img.src;
    image.style.backgroundImage = 'url("' + src + '")';
    image.innerHTML="";
}
function ResetImage() {
    let image = document.getElementById('image');
    image.style.backgroundImage="none";
    image.innerHTML="Hover over an image below to display here.";
}