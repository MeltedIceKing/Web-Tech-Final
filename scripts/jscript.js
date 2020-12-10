document.querySelector('.smallGrid').style.visibility = 'hidden';
var inputButton = document.querySelector('button');
var imageDiv = document.querySelector('#thumb-bar');
var imagesList = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg"
];
var listImages = [];

let appendImages = () => {
    for (var x = 0; x < imagesList.length; x++) {
        var fullSource = 'images/' + imagesList[x]
        var firstImage = document.createElement('img');
        firstImage.classList.add("images");
        firstImage.setAttribute("src", fullSource);
        var divImage = document.getElementById('thumb-bar');
        divImage.appendChild(firstImage)
    };
};

appendImages()

let loopImages = () => {
    var innerArray = document.querySelectorAll('.images');
    for (var i = 0; i < innerArray.length; i++) {
        lastElement = innerArray[i].src;
        listImages.push(
            lastElement
        );
    };
};

let clickedButton = () => {
    var userInput = document.querySelector('#effect').value;
    if (userInput == 'blur'){
        var imageUsed = document.querySelector('.displayed-img').src;
        for (var j = 0; j < listImages.length; j++){
            if (listImages[0] == imageUsed){
                document.querySelector('.displayed-img').src = 'images/pic1B.jpg';
            }else if (listImages[1] == imageUsed){
                document.querySelector('.displayed-img').src = 'images/pic2B.jpg';
            }else if (listImages[2] == imageUsed){
                document.querySelector('.displayed-img').src = 'images/pic3B.jpg';
            }else if (listImages[3] == imageUsed){
                document.querySelector('.displayed-img').src = 'images/pic4B.jpg';
            }else if (listImages[4] == imageUsed){
                document.querySelector('.displayed-img').src = 'images/pic5B.jpg';
            }
        };
    } else {
        alert('That is an invalid effect - try: blur')
    }
    document.querySelector('#effect').value = ''
};

loopImages();

imageDiv.addEventListener('mouseover', (e) => {
    var itemToBeUsed = e.target.src;
    document.querySelector('.displayed-img').src = itemToBeUsed;
    document.querySelector('.smallGrid').style.visibility = 'visible';
});

inputButton.addEventListener('click', clickedButton)