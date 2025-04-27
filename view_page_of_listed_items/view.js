// Example data for items (replace with dynamic data if available)
const items = [
    {
        id: 1,
        title: "Lost Wallet",
        description: "Black leather wallet with credit cards inside.",
        location: "Tesla Block",
        date: "15 June 2023",
        image: "images/wallet.jpg" // Ensure the path to the image is correct
    },
    {
        id: 2,
        title: "Found iPhone",
        description: "iPhone 12 with blue case.",
        location: "Square One",
        date: "10 June 2023",
        image: "images/iphone.jpg"
    },
    {
        id: 3,
        title: "Lost Keys",
        description: "Set of car and house keys.",
        location: "Main Entrance",
        date: "5 June 2023",
        image: "images/keys.jpg"
    }
];

// Add event listeners to "View Details" buttons
document.querySelectorAll('.view-details-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const item = items[index];
        window.location.href = `item-details.html?id=${item.id}`;
    });
});

// Get the item ID from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const itemId = parseInt(urlParams.get('id'), 10);

// Find the item in the listings data
const item = items.find(listing => listing.id === itemId);

// Populate the page with the item's details
if (item) {
    document.getElementById('item-image').src = item.image || '../images/placeholder.jpg';
    document.getElementById('item-title').textContent = item.title;
    document.getElementById('item-description').textContent = item.description;
    document.getElementById('item-location').textContent = item.location;
    document.getElementById('item-date').textContent = item.date;
} else {
    document.querySelector('.item-details').innerHTML = '<p>Item not found.</p>';
}

// Track whether the item has been verified
let isVerified = false;

// Add functionality for the "Verify" button
document.getElementById('verify-button').addEventListener('click', () => {
    isVerified = true; // Mark the item as verified
    const messageElement = document.getElementById('message');
    messageElement.style.display = 'none'; // Hide the warning message if it was displayed
    alert('You have verified this item. You can now claim it.');
});

// Add functionality for the "Claim" button
document.getElementById('claim-button').addEventListener('click', () => {
    const messageElement = document.getElementById('message');
    if (!isVerified) {
        // Show the warning message if the item is not verified
        messageElement.textContent = 'Please verify the item before claiming it.';
        messageElement.style.display = 'block';
    } else {
        // Proceed with claiming the item
        alert('You have successfully claimed this item.');
    }
});

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}