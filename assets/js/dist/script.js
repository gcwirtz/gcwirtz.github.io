/**
 * Add Alpine.js to project
 *  */
import Alpine from "alpinejs";
// Start Alpine
Alpine.start();
// console.log("Alpine.js is now running!");
/**
 * Scroll triggered animations: simple intersection observer
 *  */
const animationDriver = () => {
    // console.log('animation driver ran');
    const items = document.querySelectorAll(".step");
    const callback = (entries, observer) => {
        // console.log('callback ran');
        entries.forEach((entry) => {
            if (entry.isIntersecting &&
                entry.target.classList.contains("pre-animated")) {
                // console.log(entry);
                observer.unobserve(entry.target);
                // trigger animation
                entry.target.classList.remove("pre-animated");
            }
        });
    };
    const animationObserver = new IntersectionObserver(callback, {
        rootMargin: "0px 0px -20% 0px",
        threshold: 0,
    });
    const observeItems = (items) => {
        items.forEach((item) => {
            item.classList.add("pre-animated");
            animationObserver.observe(item);
        });
    };
    observeItems(items);
};
document.addEventListener("DOMContentLoaded", () => {
    // trigger scroll entry animations
    animationDriver();
    // On the home hero, enable the hover effect, bringing one image to the front. delayed so they can view the today photo before being able to switch back and forth
    setTimeout(function () {
        const element = document.getElementById("home-hero-image");
        // console.log(element);
        if (element) {
            element.addEventListener("mouseover", () => {
                // Add hover shift of z-index
                element.style.zIndex = "500"; // bring to front
                // console.log("hovered on");
            });
            element.addEventListener("mouseout", () => {
                // Remove hover styles
                element.style.zIndex = "0";
                // console.log("hovered off");
            });
        }
    }, 2500);
    // console.log("js loaded");
});
//# sourceMappingURL=script.js.map