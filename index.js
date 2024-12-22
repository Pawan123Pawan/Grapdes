$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: { items: 1 },
    600: { items: 3 },
    1000: { items: 5 },
  },
});

const items = document.querySelectorAll(".hero-item");
const dots = document.querySelectorAll(".dot");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let currentIndex = 0;

// Function to update the active hero item and dots
function updateCarousel(index) {
  items.forEach((item, i) => {
    item.style.display = i === index ? "flex" : "none";
  });

  // Update dots to reflect the current index
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Initialize the carousel
updateCarousel(currentIndex);

// Next Button functionality
next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel(currentIndex);
});

// Previous Button functionality
prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel(currentIndex);
});

// Dots click functionality
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});
