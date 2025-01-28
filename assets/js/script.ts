// Scroll triggered animations: simple intersection observer
const animationDriver = (): void => {
  // console.log('animation driver ran');
  const items = document.querySelectorAll(".step");

  const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
    // console.log('callback ran');
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target.classList.contains("pre-animated")) {
        // console.log(entry);

        observer.unobserve(entry.target);

        // trigger animation
        entry.target.classList.remove("pre-animated");
      }
    });
  };

  const animationObserver = new IntersectionObserver(callback, {
    rootMargin: "0px 0px -20% 0px",
    threshold: 0
  });

  const observeItems = (items: NodeListOf<Element>): void => {
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

  console.log("js hooked up");
});
