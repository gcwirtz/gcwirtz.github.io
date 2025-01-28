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
    console.log("js hooked up");
});
//# sourceMappingURL=script.js.map