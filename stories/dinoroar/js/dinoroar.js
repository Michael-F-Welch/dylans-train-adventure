//int variables
let pageNumber = 0;
let bubbleOne = 0;
let bubbleTwo = 0;
//string variables
const pageImage = ["/images/dinoroar1","/images/dinoroar2","/images/dinoroar3","/images/dinoroar4","/images/dinoroar5","/images/dinoroar6","/images/dinoroar7","/images/dinoroar8","/images/dinoroar9","/images/dinoroar10","/images/dinoroar11","/images/dinoroar12","/images/dinoroar13","/images/dinoroar14","/images/dinoroar15","/images/dinoroar16","/images/dinoroar17"];
const pageText = [];
//element variables
const forBut = document.getElementById("forward-button");
const backBut = document.getElementById("back-button");
const bubbleButOne = document.getElementById("bubble-button-one");
const bubbleButTwo = document.getElementById("bubble-button-two");
const showImage = document.getElementById("story-image");

// Forward button functionality. If bubbles are operational, does nothing. If the story is on the last page, redirects back to library page. Otherwise shows the next image and increases increases the page number int. 
forBut.addEventListener("click", function() {
    if (bubbleOne !== 0 && bubbleTwo !== 0) return;
    if (pageNumber == pageImage.length - 1) {
        window.location.href = "stories.html";
    }
    showImage.src = pageImage[pageNumber];
    pageNumber ++;
});

// Back button functionality. If on a bubble page, resets bubbles. If on the frst page, does nothing. Otherwise shows the previous page and reduces the page number int. 
backBut.addEventListener("click", function() {
    if (bubbleOne !== 0 && bubbleTwo !== 0) {
        bubbleOne = 0;
        bubbleTwo = 0;
        pageNumber --;
    }
    if (pageNumber == 0) return;
    showImage.src = pageImage[pageNumber];
    pageNumber --;
});