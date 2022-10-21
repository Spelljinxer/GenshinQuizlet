

/**
 * Creates a randomised background image
 * TODO: Make it fit to screen (!!)
 * TODO: Add more images (!)
 */
var images = ['bg-1.png', 'bg-2.png', 'bg-3.png', 'bg-4.png', 'bg-5.png', 'bg-6.png'];
    $('body').css({
        'background-image': 'url(' + '../static/images/' + images[Math.floor(Math.random() * images.length)] + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'webkit-background-size': 'cover',
        'moz-background-size': 'cover',
        'o-background-size': 'cover',
    });

/**
 * Creates the drop down menu
 */
function myFunction(x) {
    x.classList.toggle("change");
    
    document.getElementById('myDropdown').style.display = document.getElementById('myDropdown').style.display =='block' ?   'none' : 'block';
}

/**
 * Typing effect on home page
 * TODO: Add more text? (!)
 */
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Characters", "Artifacts", "Weapons", "Lore"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 175; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});