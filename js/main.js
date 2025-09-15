// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Simple form validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");

    if (!name || !email || !message) {
      status.textContent = "Please fill all fields.";
      status.style.color = "red";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      status.textContent = "Enter a valid email.";
      status.style.color = "red";
    } else {
      status.textContent = "Message sent! (Demo only)";
      status.style.color = "green";
      contactForm.reset();
    }
  });
}
