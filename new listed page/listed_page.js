// Select all necessary elements
const claimButtons = document.querySelectorAll('.claim-button');
const searchInput = document.querySelector('.navbar-search input');
const searchButton = document.querySelector('.navbar-search button');
const flipCards = document.querySelectorAll('.flip-card');

// Select the dark mode toggle elements
const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Select necessary elements for filtering
const filterButton = document.querySelector('.filter-button');
const filterDropdown = document.querySelector('.filter-dropdown');
const applyCategoryButton = document.querySelector('.apply-category-button');
const categorySelect = document.querySelector('.filter-dropdown select');

// Add functionality to claim buttons
claimButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const itemDetails = button.parentElement.querySelector('p').textContent;
    alert(`You have claimed the following item:\n\n${itemDetails}`);
    button.textContent = 'Claimed';
    button.disabled = true;
    button.style.backgroundColor = '#6c757d';
    button.style.cursor = 'not-allowed';
  });
});

// Toggle dropdown visibility
filterButton.addEventListener('click', () => {
  filterDropdown.style.display =
    filterDropdown.style.display === 'block' ? 'none' : 'block';
});

// Apply category filter
applyCategoryButton.addEventListener('click', () => {
  const selectedCategory = categorySelect.value.toLowerCase();
  flipCards.forEach((card) => {
    const itemDetails = card.querySelector('.flip-card-back p').textContent.toLowerCase();
    if (selectedCategory === '' || itemDetails.includes(selectedCategory)) {
      card.style.display = 'flex'; // Show matching cards
    } else {
      card.style.display = 'none'; // Hide non-matching cards
    }
  });

  // Hide the dropdown after applying the filter
  filterDropdown.style.display = 'none';
});

// Add functionality to search bar
searchButton.addEventListener('click', () => {
  const searchText = searchInput.value.toLowerCase();
  flipCards.forEach((card) => {
    const itemDetails = card.querySelector('.flip-card-back p').textContent.toLowerCase();
    if (itemDetails.includes(searchText)) {
      card.style.display = 'flex'; // Show matching cards
    } else {
      card.style.display = 'none'; // Hide non-matching cards
    }
  });
});

// Optional: Add real-time search functionality
searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();
  flipCards.forEach((card) => {
    const itemDetails = card.querySelector('.flip-card-back p').textContent.toLowerCase();
    if (itemDetails.includes(searchText)) {
      card.style.display = 'flex'; // Show matching cards
    } else {
      card.style.display = 'none'; // Hide non-matching cards
    }
  });
});

// Add event listener for the toggle switch
darkModeCheckbox.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');

  // Toggle sun and moon icons
  if (document.body.classList.contains('dark-mode')) {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 100, // Number of particles
      density: {
        enable: true,
        value_area: 800, // Density area
      },
    },
    color: {
      value: "#ffffff", // Particle color
    },
    shape: {
      type: "circle", // Shape of particles
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse", // Particles move away on hover
      },
      onclick: {
        enable: true,
        mode: "push", // Add particles on click
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});