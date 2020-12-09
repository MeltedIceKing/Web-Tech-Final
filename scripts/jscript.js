document.querySelector('.smallGrid').style.visibility = 'hidden';
var imageDiv = document.querySelector('#thumb-bar')
var listImages = [];

let loopImages = () => {
    var innerArray = document.querySelectorAll('.images');
    console.log(innerArray);
    for (var i = 0; i < innerArray.length; i++) {
        lastElement = innerArray[i].src.split('/')
        listImages.push(
            lastElement[lastElement.length - 1]
        );
    };
    console.log(listImages)
};

loopImages();


imageDiv.addEventListener('mouseover', (e) => {
    var itemToBeUsed = e.target.src;
    document.querySelector('.displayed-img').src = itemToBeUsed
    document.querySelector('.smallGrid').style.visibility = 'visible';
});