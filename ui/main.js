console.log('Loaded!');

//To change the content of main text
var element = document.getElementById('main-text');
element.innerHTML = "New value";

//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.mrginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 100);
    img.style.marginRight = '100px';
};