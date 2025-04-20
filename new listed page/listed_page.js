// Select all necessary elements
const claimButtons = document.querySelectorAll('.claim-button');
const categorySelect = document.querySelector('.filter-bar select');
const filterButton = document.querySelector('.filter-button');
const searchInput = document.querySelector('.navbar-search input');
const searchButton = document.querySelector('.navbar-search button');
const flipCards = document.querySelectorAll('.flip-card');

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

// Add functionality to filter by category
filterButton.addEventListener('click', () => {
  const selectedCategory = categorySelect.value.toLowerCase();
  flipCards.forEach((card) => {
    const itemDetails = card.querySelector('.flip-card-back p').textContent.toLowerCase();
    if (selectedCategory === '' || itemDetails.includes(selectedCategory)) {
      card.style.display = 'flex'; // Show matching cards
    } else {
      card.style.display = 'none'; // Hide non-matching cards
    }
  });
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