// Predefined list of words
const words = [
    "Innovator",
    "Electrical engineer",
    "Volunteer",
    "Furry",
    "Amateur developer",
    "Sales & customer service",
    "Hobby pianist"
];

// Predefined list of background images (stored in the "images" folder)
const images = [
    "./images/piano.jpg",   //piano
    "./images/innovation.jpg",  //innovator
    "./images/engineer.jpg",  //electrical engineer
    "./images/frivillig.jpg",   //volunteer
    "./images/IMG_20230223_113047.jpg", //furry 
    "./images/code.jpg",  //amateur developer
    "./images/IMG_20250617_143251.jpg", //salesman
];

let currentIndex = 0;
const headingElement = document.getElementById('dynamic-heading');
const slide1 = document.getElementById('slide-1');
const slide2 = document.getElementById('slide-2');



function changeContent() {
    // Fade out the current text
    headingElement.classList.add('fade-out');

    // Wait for the fade-out transition to complete
    setTimeout(() => {
        // Update the text
        headingElement.textContent = words[currentIndex];

        // Fade in the new text
        headingElement.classList.remove('fade-out');

        // Update the background slideshow
        const nextIndex = (currentIndex + 1) % words.length;

        if (slide1.classList.contains('active')) {
            slide1.style.backgroundImage = `url(${images[currentIndex]})`;
            slide2.style.backgroundImage = `url(${images[nextIndex]})`;
            slide1.classList.remove('active');
            slide2.classList.add('active');
        } else {
            slide2.style.backgroundImage = `url(${images[currentIndex]})`;
            slide1.style.backgroundImage = `url(${images[nextIndex]})`;
            slide2.classList.remove('active');
            slide1.classList.add('active');
        }

        // Move to the next word and image in the list
        currentIndex = nextIndex;
    }, 500); // 500ms matches the CSS transition duration
}


// Set the initial background images
slide1.style.backgroundImage = `url(${images[currentIndex]})`;
slide2.style.backgroundImage = `url(${images[(currentIndex + 1) % words.length]})`;

// Start the first transition immediately
changeContent();

// Change the content every 3 seconds (3000 milliseconds)
setInterval(changeContent, 3000);
