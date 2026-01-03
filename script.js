// ১. কাস্টম মাউস ফলোয়ার এনিমেশন
const cursor = document.querySelector("#custom-cursor");

document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out"
    });
});

// ২. স্ক্রল করলে টেক্সট প্যারালাক্স ইফেক্ট
gsap.to(".parallax-text", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        scrub: true
    },
    y: -150,
    opacity: 0.3
});