document.addEventListener('DOMContentLoaded', () => {
  // Initialize Particles.js
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      }
    },
    retina_detect: true
  });

  // Get query parameters from the URL
  const params = new URLSearchParams(window.location.search);
  const itemName = params.get('name');
  const itemLocation = params.get('location');
  const itemImage = params.get('img');

  // Populate the details on the page
  document.getElementById('item-name').textContent = itemName;
  document.getElementById('item-location').textContent = `Location: ${itemLocation}`;
  document.getElementById('item-image').src = itemImage;

  // Function to navigate back to the previous page
  window.goBack = function () {
    window.history.back();
  };

  // Function to verify the item
  window.verifyItem = function () {
    alert("Item has been verified successfully!");
  };

  // Function to claim the item
  window.claimItem = function () {
    alert("You have successfully claimed the item!");
  };

  // Dark Mode Toggle
  const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  // Check localStorage for dark mode state
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeCheckbox.checked = true;
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }

  // Toggle dark mode and save state in localStorage
  darkModeCheckbox.addEventListener('change', () => {
    if (darkModeCheckbox.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  });
});