/*

//animated menuu

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
        console.log("Menu toggle clicked!");
        menu.classList.toggle('active');
    });
} else {
    console.error("Menu toggle or menu element not found.");
}

//body things

// Scroll-triggered animations
gsap.registerPlugin(ScrollTrigger);

if (document.querySelector(".scroll-section")) {
    gsap.from(".box", {
        scrollTrigger: ".scroll-section",
        x: -200,
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut"
    });
} else {
    console.error(".scroll-section element not found.");
}
// Hover effects (handled by CSS)

// Mouse move animation
const circle = document.querySelector(".circle");
const mouseSection = document.querySelector(".mouse-section");

if (circle && mouseSection) {
    mouseSection.addEventListener("mousemove", (e) => {
        gsap.to(circle, {
            x: e.clientX - 25,
            y: e.clientY - 25,
            duration: 0.2,
            ease: "power2.out"
        });
    });
} else {
    console.error("Mouse-section or circle element not found.");
}

// Timed animations
const hoverButton = document.querySelector(".hover-button");

if (hoverButton) {
    gsap.to(hoverButton, {
        repeat: -1,
        yoyo: true,
        scale: 1.1,
        duration: 1
    });
} else {
    console.error(".hover-button element not found.");
} */


    // Existing menu toggle code remains the same

// Scroll-triggered animations with smoother scroll scrub
gsap.registerPlugin(ScrollTrigger);
gsap.from(".box", {
    scrollTrigger: {
        trigger: ".scroll-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        markers: true
    },
    x: -200,
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut"
});

// Enhanced mouse move animation for smoother performance
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;

const circle = document.querySelector(".circle");
const mouseSection = document.querySelector(".mouse-section");

function moveCircle() {
    const distX = targetX - mouseX;
    const distY = targetY - mouseY;
    mouseX += distX * 0.1;
    mouseY += distY * 0.1;
    gsap.to(circle, {
        x: mouseX - 25,
        y: mouseY - 25,
        duration: 0.1,
        ease: "power2.out"
    });
    requestAnimationFrame(moveCircle);
}

if (circle && mouseSection) {
    mouseSection.addEventListener("mousemove", (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    moveCircle();
}

// Hover button animation
const hoverButton = document.querySelector(".hover-button");
if (hoverButton) {
    gsap.to(hoverButton, {
        repeat: -1,
        yoyo: true,
        scale: 1.1,
        duration: 1
    });
} else {
    console.error(".hover-button element not found.");
}

document.addEventListener("DOMContentLoaded", () => {
    const hoverButton = document.querySelector(".hover-button");

    if (hoverButton) {
        // Hover in: Enlarge the button
        hoverButton.addEventListener("mouseover", () => {
            gsap.to(hoverButton, { scale: 1.8, duration: 0.3 });
        });

        // Hover out: Only shrink when the mouse completely leaves the button
        hoverButton.addEventListener("mouseout", () => {
            gsap.to(hoverButton, { scale: 1, duration: 0.3 });
        });
    } else {
        console.error(".hover-button element not found.");
    }
});



