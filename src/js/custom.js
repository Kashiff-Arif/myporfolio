document.addEventListener("DOMContentLoaded", function () {
    // Navbar Scroll Animation
    window.addEventListener("scroll", function () {
      let nav = document.querySelector(".navbar");
      nav.classList.toggle("sticky", window.scrollY > 50);
    });
  
    // Smooth Scroll
    const links = document.querySelectorAll(".navbar a");
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      });
    });
  
    // Contact Form Validation
    const form = document.querySelector("#contact-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;
  
        if (name === "" || email === "" || message === "") {
          alert("Please fill all fields!");
        } else {
          alert("Message Sent Successfully!");
          form.reset();
        }
      });
    }
  });
  