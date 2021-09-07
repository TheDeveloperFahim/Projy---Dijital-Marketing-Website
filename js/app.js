// ========== Sticky Navbar ==========
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});


$(document).ready(function () {
  // Counter up
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // Responsive Mobile Menu
  $(".manu-icon").on("click", function () {
    $(".navbar-menu").slideToggle();
  });
});

