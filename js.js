document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("navMenu");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    navMenu.classList.toggle("show");
  });

  // Untuk toggle dropdown saat di HP
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        const parent = toggle.parentElement;
        parent.classList.toggle("open");
      }
    });
  });
});


