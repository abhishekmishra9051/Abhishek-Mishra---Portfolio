// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define speed
let speed = 100;

// Function to create scene
function createScene(start, end, scrub) {
    return gsap.timeline({
        scrollTrigger: {
            trigger: ".scrollElement",
            start: start,
            end: end,
            scrub: scrub,
        },
    });
}

// SCENE 1
let scene1 = createScene("top top", "45% 100%", 3);

// Hills animation 
let hills = ["#h1-1", "#h1-2", "#h1-3", "#h1-4", "#h1-5", "#h1-6", "#h1-7", "#h1-8", "#h1-9"];
hills.forEach(hill => {
    scene1.to(hill, { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0);
});

// Animate text
scene1.to("#info", { y: 8 * speed }, 0);

// Bird animation
gsap.fromTo("#bird", { opacity: 1 }, {
    y: -250,
    x: 800,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "15% top",
        end: "60% 100%",
        scrub: 4,
        onEnter: function() { gsap.to("#bird", { scaleX: 1, rotation: 0 }) },
        onLeave: function() { gsap.to("#bird", { scaleX: -1, rotation: -15 }) },
    }
});

// Clouds animation
let clouds = createScene("top top", "70% 100%", 1);
let cloudIds = ["#cloud1", "#cloud2", "#cloud3", "#cloud4"];
let cloudPositions = [500, 1000, -1000, -700];
cloudIds.forEach((cloud, index) => {
    clouds.to(cloud, { x: cloudPositions[index] }, 0);
});

// Sun motion Animation
let sun = createScene("top top", "2200 100%", 1);
sun.to("#bg_grad", { attr: { cy: "330" } }, 0.00);

// Background change
let bgElements = ["#sun", "#bg_grad stop:nth-child(2)", "#bg_grad stop:nth-child(3)", "#bg_grad stop:nth-child(4)", "#bg_grad stop:nth-child(5)"];
bgElements.forEach(element => {
    sun.to(element, { attr: { offset: "0.15" } }, 0.00);
});
sun.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#FF9171" } }, 0);

// SCENE 2
let scene2 = createScene("15% top", "40% 100%", 4);
let scene2Elements = ["#h2-1", "#h2-2", "#h2-3", "#h2-4", "#h2-5", "#h2-6"];
scene2Elements.forEach(element => {
    scene2.fromTo(element, { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
});

// Bats animation
gsap.fromTo("#bats", { opacity: 1, y: 400, scale: 0 }, {
    y: 120,
    scale: 0.8,
    transformOrigin: "50% 50%",
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "40% top",
        end: "70% 100%",
        scrub: 3,
        onEnter: function() {
            gsap.utils.toArray("#bats path").forEach((item, i) => {
                gsap.to(item, { scaleX: 0.5, yoyo: true, repeat: 11, duration: 0.15, delay: 0.7 + (i / 10), transformOrigin: "50% 50%" });
            });
            gsap.set("#bats", { opacity: 1 });
        },
        onLeave: function() { gsap.to("#bats", { opacity: 0, delay: 2 }); },
    }
});

// Sun increase
let sun2 = createScene("2200 top", "5000 100%", 1);
sun2.to("#sun", { attr: { offset: "0.6" } }, 0);
sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0);
sun2.to("#sun", { attr: { "stop-color": "#ffff00" } }, 0);
sun2.to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#623951" } }, 0);
sun2.to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#261F36" } }, 0);
sun2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#45224A" } }, 0);

// Transition (from Scene2 to Scene3)
gsap.set("#scene3", { y: 580, visibility: "visible" });
let sceneTransition = createScene("70% top", "bottom 100%", 3);
sceneTransition.to("#h2-1", { y: -680, scale: 1.5, transformOrigin: "50% 50%" }, 0);
sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0.00);
sceneTransition.to("#bg2", { y: 0 }, 0);

// Scene 3
let scene3 = createScene("80% 50%", "bottom 100%", 3);
let scene3Elements = ["#h3-1", "#h3-2", "#h3-3", "#h3-4", "#h3-5"];
scene3Elements.forEach(element => {
    scene3.fromTo(element, { y: 300 }, { y: -550 }, 0);
});

// Stars animation
scene3.fromTo("#stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0);

// Scroll Back text
scene3.fromTo("#arrow2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.25);
scene3.fromTo("#text2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.3);

// Gradient value change
scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0);
scene3.to("#bg2-grad", { attr: { r: 500 } }, 0);

// Falling star
gsap.to("#fstar", {
    x: -700,
    y: -250,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "4000 top",
        end: "6000 100%",
        scrub: 5,
        onEnter: function() { gsap.set("#fstar", { opacity: 1 }) },
        onLeave: function() { gsap.set("#fstar", { opacity: 0 }) },
    }
});

// Reset scrollbar position after refresh
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

// Fullscreen functionality
let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        fsEnter.innerHTML = "Exit Fullscreen";
    }
    else {
        fullscreen = false;
        document.exitFullscreen();
        fsEnter.innerHTML = "Go Fullscreen";
    }
});
