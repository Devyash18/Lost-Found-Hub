// Sample data for listings
const listings = [
    {
      id: 1,
      title: "Lost Wallet",
      description: "Black leather wallet with credit cards inside",
      image: "https://i.pinimg.com/736x/65/36/a4/6536a4fd58a8caccc905733477fcfc0d.jpg",
      location: "Tesla Block",
      date: "2023-06-15",
      status: "lost",
      type: "lost"
    },
    {
      id: 2,
      title: "Found iPhone",
      description: "iPhone 12 with blue case",
      image: "https://i.pinimg.com/736x/c2/0f/2a/c20f2a16bd32dbb321041bc2477818e7.jpg",
      location: "Square One",
      date: "2023-06-10",
      status: "found",
      type: "found"
    },
    {
      id: 3,
      title: "Lost Keys",
      description: "Set of car and house keys",
      image: "https://bettystreff.com/wp-content/uploads/2017/07/keys.jpg",
      location: "Main Entrance",
      date: "2023-06-05",
      status: "lost",
      type: "lost"
    },
    {
      id: 4,
      title: "Found Watch",
      description: "Silver wristwatch near the fountain",
      image: "https://i.ebayimg.com/images/g/TnIAAOSwqeRlPVxr/s-l400.jpg",
      location: "Fountain",
      date: "2023-05-28",
      status: "found",
      type: "found"
    },
    {
      id: 5,
      title: "Lost Backpack",
      description: "Blue backpack with laptop inside",
      image: "https://i.ebayimg.com/images/g/FKAAAOSwonJmgzIQ/s-l400.jpg",
      location: "University Library",
      date: "2023-05-20",
      status: "returned",
      type: "lost"
    },
    {
      id: 6,
      title: "Found Sunglasses",
      description: "Rayban aviator sunglasses",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngiB-L4wa7pS0e94IZCZVrXmRIhNvQP7hTqD-olzwUfl-Lkt_JnfLUpbH_Wf5LXvdvDU&usqp=CAU",
      location: "Parking lot",
      date: "2023-05-15",
      status: "found",
      type: "found"
    },
    {
      id: 7,
      title: "Lost Glasses",
      description: "Pair of black-rimmed glasses.",
      image: "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/eIkAAOSwvy5lGkde/$_12.JPG?set_id=880000500F",
      location: "Alpha zone",
      date: "2023-05-12",
      status: "lost",
      type: "lost"
    },
    {
      id: 8,
      title: "Found Umbrella",
      description: "Blue umbrella found at the bus stop.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1LBQLdpth2JrMLn8qERRqygj1eMvaBjNN7A&s",
      location: "Bus Stop",
      date: "2023-05-10",
      status: "found",
      type: "found"
    },
    {
      id: 9,
      title: "Found Book",
      description: "Hardcover book titled 'The Great Gatsby' found in the library.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJ9Rlz5DpA8MXu16gzvgLUiNiyPQJpbNBOA&s",
      location: "Library",
      date: "2023-05-08",
      status: "found",
      type: "found"
    },
    {
      id: 10,
      title: "Lost Headphones",
      description: "Black wireless headphones.",
      image: "https://di2ponv0v5otw.cloudfront.net/posts/2022/09/29/633659ff2fbf1a30e994223a/m_63365a177dfcc28e8bb48156.jpg",
      location: "Near boys hostel",
      date: "2023-05-05",
      status: "lost",
      type: "lost"
    },
    {
      id: 11,
      title: "Found Ring",
      description: "Gold ring with a diamond.",
      image: "https://shop.kenanddanadesign.com/cdn/shop/products/IMG_1381_7ba77f24-c6f5-4e84-8999-64151428d647.jpg?v=1733934429&width=1946",
      location: "flameing block",
      date: "2023-05-02",
      status: "found",
      type: "found"
    },
    {
      id: 12,
      title: "Lost Phone Charger",
      description: "Black phone charger found in the library.",
      image: "",
      location: "Library",
      date: "2023-05-01",
      status: "lost",
      type: "lost"
    },
    {
      id: 13,
      title: "Found Scarf",
      description: "Red scarf found at the pythagroes block.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkp0-RcbdkWP1WuyBrh116DqMQFdsvaCUezg&s",
      location: "Pythagroes block",
      date: "2023-04-30",
      status: "found",
      type: "found"
    },
    {
      id: 14,
      title: "Lost Camera",
      description: "Digital camera with a black case.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LDQ81d2sXwAeAOZxevtOA4vs3aWQAh_dIgscBUiBCCLjOK6V38lQJlWJ7JZvzXAWFEY&usqp=CAU",
      location: "Omega zone",
      date: "2023-04-28",
      status: "lost",
      type: "lost"
    },
    {
      id: 15,
      title: "Found locket",
      description: "Silver locket with a heart pendant.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2t18BKLiE0Ix5WGqc6SCfW6xHaLZ_B36QYwDYJOvl4bE7P8UTVltb762rdTIrIiXWS5E&usqp=CAU",
      location: "Square one",
      date: "2023-04-25",
      status: "found",
      type: "found"
    }
  ];
  
  // DOM Elements
  const listingsContainer = document.getElementById('listings-container');
  const allBtn = document.getElementById('all-btn');
  const lostBtn = document.getElementById('lost-btn');
  const foundBtn = document.getElementById('found-btn');
  
  // Current filter state
  let currentFilter = 'all';
  
  // Initialize the page
// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
  renderListings();
  setupFilterButtons();

  // Check URL parameters for filter
  const urlParams = new URLSearchParams(window.location.search);
  const filter = urlParams.get('filter');

  if (filter === 'lost' || filter === 'found') {
    setActiveFilter(filter);
    updateSidebarActiveState(filter);
  } else {
    setActiveFilter('all');
    updateSidebarActiveState('all');
  }
});
  
  // Render listings based on current filter
  function renderListings() {
    listingsContainer.innerHTML = '';
  
    const filteredListings = listings.filter(listing => {
      if (currentFilter === 'all') return true;
      return listing.type === currentFilter;
    });
  
    if (filteredListings.length === 0) {
      listingsContainer.innerHTML = '<p>No items found matching your criteria.</p>';
      return;
    }
  
    filteredListings.forEach(listing => {
      const listingCard = createListingCard(listing);
      listingsContainer.appendChild(listingCard);
    });
  }
  
  // Create a listing card element
  function createListingCard(listing) {
    const card = document.createElement('div');
    card.className = 'listing-card';
  
    // Determine status class and text
    let statusClass, statusText;
    if (listing.status === 'lost') {
      statusClass = 'status-lost';
      statusText = 'Lost';
    } else if (listing.status === 'found') {
      statusClass = 'status-found';
      statusText = 'Found';
    } else {
      statusClass = 'status-returned';
      statusText = 'Returned';
    }
  
    card.innerHTML = `
      <div class="listing-img" style="background-image: url('${listing.image}')"></div>
      <div class="listing-details">
        <span class="listing-status ${statusClass}">${statusText}</span>
        <h3 class="listing-title">${listing.title}</h3>
        <p>${listing.description}</p>
        <div class="listing-location">
          <i class="fas fa-map-marker-alt"></i>
          <span>${listing.location}</span>
        </div>
        <div class="listing-date">
          <i class="far fa-calendar-alt"></i>
          <span>${formatDate(listing.date)}</span>
        </div>
        <a href="listing-detail.html?id=${listing.id}" class="view-btn">View Details</a>
      </div>
    `;
  
    return card;
  }
  
  // Format date
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  
  // Set up filter button event listeners
  function setupFilterButtons() {
    allBtn.addEventListener('click', () => {
      setActiveFilter('all');
      updateSidebarActiveState('all');
    });
    lostBtn.addEventListener('click', () => {
      setActiveFilter('lost');
      updateSidebarActiveState('lost');
    });
    foundBtn.addEventListener('click', () => {
      setActiveFilter('found');
      updateSidebarActiveState('found');
    });
  }
  
  // Set the active filter and update UI
  function setActiveFilter(filter) {
    currentFilter = filter;
  
    // Update button states
    allBtn.className = filter === 'all' ? 'filter-btn active' : 'filter-btn inactive';
    lostBtn.className = filter === 'lost' ? 'filter-btn active' : 'filter-btn inactive';
    foundBtn.className = filter === 'found' ? 'filter-btn active' : 'filter-btn inactive';
  
    // Update URL without reloading
    const url = new URL(window.location);
    if (filter === 'all') {
      url.searchParams.delete('filter');
    } else {
      url.searchParams.set('filter', filter);
    }
    window.history.pushState({}, '', url);
  
    // Re-render listings
    renderListings();
  }
  
  // Update sidebar active state based on filter
  // Update sidebar active state based on filter
function updateSidebarActiveState(filter) {
  const sidebarLinks = document.querySelectorAll('.sidebar-nav li');
  
  // Remove active class from all links first
  sidebarLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Set active class based on filter
  if (filter === 'lost') {
    // Find the "Lost Items" link in sidebar
    const lostItemsLink = document.querySelector('.sidebar-nav a[href*="filter=lost"]').parentElement;
    lostItemsLink.classList.add('active');
  } else if (filter === 'found') {
    // Find the "Found Items" link in sidebar
    const foundItemsLink = document.querySelector('.sidebar-nav a[href*="filter=found"]').parentElement;
    foundItemsLink.classList.add('active');
  } else {
    // Default to "Search Items" link
    const searchItemsLink = document.querySelector('.sidebar-nav a[href="listings.html"]').parentElement;
    searchItemsLink.classList.add('active');
  }
}
  
  // Add search functionality
  document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    filterListingsBySearch(query);
  });
  
  document.getElementById('search-input').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    filterListingsBySearch(query);
  });
  
  function filterListingsBySearch(query) {
    const filteredListings = listings.filter(listing =>
      listing.title.toLowerCase().includes(query) ||
      listing.description.toLowerCase().includes(query) ||
      listing.location.toLowerCase().includes(query)
    );
  
    listingsContainer.innerHTML = '';
  
    if (filteredListings.length === 0) {
      listingsContainer.innerHTML = '<p>No items found matching your search.</p>';
      return;
    }
  
    filteredListings.forEach(listing => {
      const listingCard = createListingCard(listing);
      listingsContainer.appendChild(listingCard);
    });
  }
  
  // Add sort functionality
  document.getElementById('sort-select').addEventListener('change', (e) => {
    const sortValue = e.target.value;
  
    if (sortValue === 'date-desc') {
      listings.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortValue === 'date-asc') {
      listings.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortValue === 'title-asc') {
      listings.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === 'title-desc') {
      listings.sort((a, b) => b.title.localeCompare(a.title));
    }
  
    renderListings();
  });