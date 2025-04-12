function togglePassword() {
    const input = document.getElementById("password");
    const toggle = input.nextElementSibling;
    if (input.type === "password") {
      input.type = "text";
      toggle.textContent = "Hide";
    } else {
      input.type = "password";
      toggle.textContent = "Show";
    }
  }
  // Add this to both login.js and signup.js
function transitionToPage(event, href) {
  event.preventDefault(); // Stop the default link behavior
  const container = document.querySelector('.container');
  container.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = href;
  }, 400); // Match the transition time in CSS
}

// Optional: animate in on page load
window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  container.classList.add('hidden'); // Start hidden
  setTimeout(() => {
    container.classList.remove('hidden'); // Trigger entrance animation
  }, 10); // Tiny delay triggers transition
});
