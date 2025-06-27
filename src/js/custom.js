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
    window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const topOffset = navbar.getBoundingClientRect().top;

    if (topOffset <= 0) {
      navbar.classList.add('stickheader');
    } else {
      navbar.classList.remove('stickheader');
    }
  });
    // Contact Form Validation
    const form = document.querySelector("#contact");
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

// Contact Form Submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", async function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
        
        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Success message
                const successAlert = document.createElement('div');
                successAlert.className = 'alert alert-success mt-3';
                successAlert.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                contactForm.appendChild(successAlert);
                
                // Reset form
                contactForm.reset();
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successAlert.remove();
                }, 5000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            // Error message
            const errorAlert = document.createElement('div');
            errorAlert.className = 'alert alert-danger mt-3';
            errorAlert.textContent = 'Oops! Something went wrong. Please try again later or contact me directly at kashifarif409@gmail.com';
            contactForm.appendChild(errorAlert);
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
}
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


// progress bar function


function animatePercent(el, target) {
  let count = 0;
  const speed = 15;
  const update = () => {
    if (count < target) {
      count++;
      el.textContent = count + "%";
      setTimeout(update, speed);
    } else {
      el.textContent = target + "%";
    }
  };
  update();
}

window.addEventListener("load", () => {
  document.querySelectorAll(".progress-fill").forEach((bar) => {
    const targetWidth = bar.getAttribute("data-value");
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = targetWidth + "%";
    }, 200);
  });

  document.querySelectorAll(".progress-percent").forEach((percent) => {
    const target = parseInt(percent.getAttribute("data-target"));
    animatePercent(percent, target);
  });
});

// Toast logic
function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// Sound
const clickSound = new Audio("https://assets.mixkit.co/sfx/download/mixkit-select-click-1109.wav");

function updateProgress(el, change) {
  const percentEl = el.querySelector('.progress-percent');
  const fillEl = el.querySelector('.progress-fill');
  const skillName = el.getAttribute('data-skill');

  let current = parseInt(fillEl.getAttribute('data-value'));
  const newValue = current + change;

  if (newValue > 100) {
    showToast(`${skillName} is already maxed out 💯`, 'warning');
    return;
  }

  if (newValue < 0) {
    showToast(`${skillName} is already at 0 🫠`, 'error');
    return;
  }

  fillEl.setAttribute('data-value', newValue);
  fillEl.style.width = newValue + "%";
  percentEl.textContent = newValue + "%";

  const toastMsg = change > 0
    ? `+1% added to ${skillName} 🎯`
    : `-1% removed from ${skillName} 👀`;

  const type = change > 0 ? 'success' : 'info';

  showToast(toastMsg, type);
  clickSound.currentTime = 0;
  clickSound.play();
}

// Button listeners
document.querySelectorAll('.add-progress').forEach((btn) => {
  btn.addEventListener('click', () => {
    const container = btn.closest('.progress-bar');
    updateProgress(container, 1);
  });
});

document.querySelectorAll('.minus-progress').forEach((btn) => {
  btn.addEventListener('click', () => {
    const container = btn.closest('.progress-bar');
    updateProgress(container, -1);
  });
});





  
  