document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});


const style = document.createElement('style'); // Create a new <style> element
document.head.appendChild(style); // Append it to <head>

const position = 'left'; // or 'right'
const textElement = document.querySelector('.text');

if (textElement) { 
    const textWidth = textElement.offsetWidth + 10; // Ensure textElement exists before using it

    style.innerHTML = `
    @keyframes my-animation {
        0% { ${position}: -${textWidth}px; }
        100% { ${position}: 100%; }
    }`;
}


let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

function showSlide(index) {
    // Reset slideIndex if it goes out of bounds
    if (index >= slides.length) {
        slideIndex = 0; // Go to the first slide
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Go to the last slide
    }

    // Move the slider
    slider.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function nextSlide() {
    slideIndex++; // Move to the next slide
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--; // Move to the previous slide
    showSlide(slideIndex);
}

function autoSlide() {
    nextSlide(); // Automatically move to the next slide
}




// document.addEventListener('DOMContentLoaded', function() {
//     const scrollUpBtn = document.querySelector('.scroll-up-btn');
    
//     window.addEventListener('scroll', function() {
//         if (window.pageYOffset > 300) {
//             scrollUpBtn.classList.add('show');
//         } else {
//             scrollUpBtn.classList.remove('show');
//         }
//     });
    
//     scrollUpBtn.addEventListener('click', function() {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     });
// });



document.addEventListener('DOMContentLoaded', function() {
    const scrollUpBtn = document.querySelector('.scroll-up-btn');
    
    // Check if the button exists
    if (!scrollUpBtn) {
        console.error('Scroll up button not found!');
        return;
    }

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollUpBtn.classList.add('show');
        } else {
            scrollUpBtn.classList.remove('show');
        }
    });

    // Smooth scroll to top when clicked
    scrollUpBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Debugging: Log to confirm the script is running
    console.log('Scroll up button script loaded');
});


// Set interval for auto-sliding
setInterval(autoSlide, 3000);


// Function to show a section (for tabbed content)
function showSection(sectionId) {
    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Remove 'active' class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show the selected section
    document.getElementById(sectionId)?.classList.remove('hidden');
    
    // Add 'active' class to the clicked tab
    const clickedTab = document.querySelector(`.tab[href="#${sectionId}"]`);
    if (clickedTab) {
        clickedTab.classList.add('active');
    }
}

// Handle anchor links on page load
window.addEventListener('load', () => {
    const hash = window.location.hash; // e.g., "#Director"
    if (hash) {
        const targetSection = document.querySelector(hash);
        if (targetSection) {
            // If section is in tabs, unhide it first
            if (targetSection.classList.contains('content-section')) {
                showSection(hash.substring(1)); // Remove "#" (e.g., "Director")
            }
            // Smooth scroll to the section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.card-wrapper', {
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
        }
    });
});



const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

let activated = false;
const animationDuration = 2000; // 5 seconds in milliseconds

window.addEventListener("scroll", () => {
    const containerPosition = container.offsetTop - container.offsetHeight - 200;
    const resetPosition = container.offsetTop - container.offsetHeight - 500;
    
    if (window.pageYOffset > containerPosition && activated === false) {
        counters.forEach(counter => {
            counter.innerText = 0;
            let count = 0;
            const target = parseInt(counter.dataset.count);
            
            // Calculate how many times we need to update to reach target in 5 seconds
            // Using ~60 frames per second for smooth animation
            const totalFrames = Math.min(300, target); // Max 300 frames (5 seconds at 60fps)
            const increment = Math.max(1, Math.ceil(target / totalFrames));
            const delay = animationDuration / totalFrames;

            function updateCount() {
                if (count < target) {
                    count = Math.min(count + increment, target);
                    counter.innerText = count;
                    setTimeout(updateCount, delay);
                }
            }
            updateCount();
        });
        activated = true;
    } else if (window.pageYOffset < resetPosition && activated === true) {
        counters.forEach(counter => {
            counter.innerText = 0;
        });
        activated = false;
    }
});



// school.js
