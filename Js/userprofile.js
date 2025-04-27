// Function to update all profile images on the page
function updateAllProfileImages(imageUrl) {
    // Update main profile image
    document.getElementById('profileImage').src = imageUrl;
    // Update sidebar profile image
    const sidebarImage = document.getElementById('sidebarProfileImage');
    if (sidebarImage) {
        sidebarImage.src = imageUrl;
    }
}

// Image upload functionality
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.match('image.*')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageData = e.target.result;
            localStorage.setItem('profileImage', imageData);
            updateAllProfileImages(imageData);
            alert('Profile image updated!');
        };
        reader.onerror = () => alert('Error reading file!');
        reader.readAsDataURL(file);
    }
});

// Remove profile image
document.getElementById('removeImageBtn').addEventListener('click', function() {
    localStorage.removeItem('profileImage');
    const defaultImage = 'https://as1.ftcdn.net/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg';
    updateAllProfileImages(defaultImage);
    document.getElementById('fileInput').value = ''; // Clear file input
    alert('Profile image removed!');
});

// Load saved image on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedImage = localStorage.getItem('profileImage');
    const defaultImage = 'https://as1.ftcdn.net/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg';
    updateAllProfileImages(savedImage || defaultImage);
});

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', function(event) {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
        window.location.href = "Login page/login.html";
    }
});

// Sample data for user's listings
const userListings = [
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
    }
];

// Current filter state
let currentFilter = 'all';

// Function to create a listing card
function createUserListingCard(listing) {
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

// Render user's listings based on current filter
function renderUserListings() {
    const container = document.getElementById('user-listings-container');
    container.innerHTML = '';
    
    const filteredListings = userListings.filter(listing => {
        if (currentFilter === 'all') return true;
        return listing.type === currentFilter;
    });
    
    if (filteredListings.length === 0) {
        container.innerHTML = '<p>You haven\'t posted any items yet.</p>';
        return;
    }
    
    filteredListings.forEach(listing => {
        const listingCard = createUserListingCard(listing);
        container.appendChild(listingCard);
    });
}

// Set up filter button event listeners
function setupFilterButtons() {
    document.getElementById('all-btn').addEventListener('click', () => {
        setActiveFilter('all');
    });
    document.getElementById('lost-btn').addEventListener('click', () => {
        setActiveFilter('lost');
    });
    document.getElementById('found-btn').addEventListener('click', () => {
        setActiveFilter('found');
    });
}

// Set the active filter and update UI
function setActiveFilter(filter) {
    currentFilter = filter;
    
    // Update button states
    document.getElementById('all-btn').className = filter === 'all' ? 'filter-btn active' : 'filter-btn inactive';
    document.getElementById('lost-btn').className = filter === 'lost' ? 'filter-btn active' : 'filter-btn inactive';
    document.getElementById('found-btn').className = filter === 'found' ? 'filter-btn active' : 'filter-btn inactive';
    
    // Re-render listings
    renderUserListings();
}

// Update stats based on user's listings
function updateStats() {
    const lostCount = userListings.filter(item => item.type === 'lost').length;
    const foundCount = userListings.filter(item => item.type === 'found').length;
    
    document.querySelector('.stat-card:nth-child(1) .stat-number').textContent = lostCount;
    document.querySelector('.stat-card:nth-child(2) .stat-number').textContent = foundCount;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderUserListings();
    setupFilterButtons();
    updateStats();
});
        // Toggle form visibility
document.querySelector('.add-profile').addEventListener('click', function () {
    const form = document.getElementById('newProfileForm');
    form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
});

// Create profile functionality
document.getElementById('createProfileBtn').addEventListener('click', function () {
    const name = document.getElementById('newName').value.trim();
    const email = document.getElementById('newEmail').value.trim();

    if (name === '' || email === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate profile creation (you can replace this with actual storage/API later)
    alert(`New profile created!\nName: ${name}\nEmail: ${email}`);

    // Clear form
    document.getElementById('newName').value = '';
    document.getElementById('newEmail').value = '';
    document.getElementById('newProfileForm').style.display = 'none';

    // Optional: append new profile block dynamically
    const newProfile = document.createElement('div');
    newProfile.className = 'profile-section';
    newProfile.innerHTML = `
        <div class="profile-picture">
            <img src="https://via.placeholder.com/180" alt="Profile Picture" style="width:180px; height:180px; border-radius:50%; object-fit:cover; border:5px solid #e0e7ff; margin-bottom:15px;">
        </div>
        <div class="profile-info">
            <h2 class="user-name">${name}</h2>
            <p class="user-email">${email}</p>
            <p style="color: #64748b;">This is a new profile created dynamically.</p>
        </div>
    `;
    document.querySelector('.main-content').appendChild(newProfile);
});


    
        // Edit profile button alert
        document.querySelector('.edit-profile').addEventListener('click', function() {
            alert('Edit profile form would appear here');
        });

        // Logout functionality
        document.getElementById('logoutBtn').addEventListener('click', function(event) {
            const confirmLogout = confirm("Are you sure you want to log out?");
            if (confirmLogout) {
                window.location.href = "Login page/login.html"; // Redirect to login page
            }
        });