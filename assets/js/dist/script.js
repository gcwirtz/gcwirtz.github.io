"use strict";
// Scroll triggered animations: simple intersection observer
var animationDriver = function () {
    // console.log('animation driver ran');
    var items = document.querySelectorAll(".step");
    var callback = function (entries, observer) {
        // console.log('callback ran');
        entries.forEach(function (entry) {
            if (entry.isIntersecting && entry.target.classList.contains("pre-animated")) {
                // console.log(entry);
                observer.unobserve(entry.target);
                // trigger animation
                entry.target.classList.remove("pre-animated");
            }
        });
    };
    var animationObserver = new IntersectionObserver(callback, {
        rootMargin: "0px 0px -20% 0px",
        threshold: 0
    });
    var observeItems = function (items) {
        items.forEach(function (item) {
            item.classList.add("pre-animated");
            animationObserver.observe(item);
        });
    };
    observeItems(items);
};
document.addEventListener("DOMContentLoaded", function () {
    // trigger scroll entry animations
    animationDriver();
    // On the home hero, enable the hover effect, bringing one image to the front. delayed so they can view the today photo before being able to switch back and forth
    setTimeout(function () {
        var element = document.getElementById("home-hero-image");
        console.log(element);
        if (element) {
            element.addEventListener("mouseover", function () {
                // Add hover shift of z-index
                element.style.zIndex = "500"; // bring to front
                // console.log("hovered on");
            });
            element.addEventListener("mouseout", function () {
                // Remove hover styles
                element.style.zIndex = "0";
                // console.log("hovered off");
            });
        }
    }, 2500);
    // console.log("js loaded");
});
//# sourceMappingURL=script.js.map