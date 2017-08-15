console.log('Loaded!');

//To change the content of main text
var element = document.getElementById('main-text');
element.innerHTML = "New value";

//move the image
var img = document.getElementById('madi');
img.onclick = function () {
    img.style.marginLeft = '100px';
};