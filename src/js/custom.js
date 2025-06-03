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


  document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector("#projects video");
    const projectSection = document.querySelector("#projects");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.6, 
      }
    );
  
    observer.observe(projectSection);
  });


document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("themeToggle");
    const body = document.body;

    // Load saved theme from localStorage and apply it
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        body.classList.add("light-theme");
    } else {
        // Default to dark
        body.classList.add("dark-theme");
    }

    toggleBtn.addEventListener("click", function () {
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
            localStorage.setItem("theme", "light");
        } else {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        }
    });
});




  
  