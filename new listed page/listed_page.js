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