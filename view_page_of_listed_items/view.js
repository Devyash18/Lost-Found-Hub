// Example data for items (replace with dynamic data if available)
const items = [
    {
        id: 1,
        title: "Lost Wallet",
        description: "Black leather wallet with credit cards inside.",
        location: "Tesla Block",
        date: "15 June 2023",
        image: "wallet.jpg"
    },
    {
        id: 2,
        title: "Found iPhone",
        description: "iPhone 12 with blue case.",
        location: "Square One",
        date: "10 June 2023",
        image: "iphone.jpg"
    },
    {
        id: 3,
        title: "Lost Keys",
        description: "Set of car and house keys.",
        location: "Main Entrance",
        date: "5 June 2023",
        image: "keys.jpg"
    }
];

// Add event listeners to "View Details" buttons
document.querySelectorAll('.view-details-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const item = items[index];
        localStorage.setItem('selectedItem', JSON.stringify(item));
        window.location.href = 'item-details.html';
    });
});

// Populate the item-details.html page
if (window.location.pathname.includes('item-details.html')) {
    const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
    if (selectedItem) {
        document.getElementById('item-image').src = selectedItem.image;
        document.getElementById('item-title').textContent = selectedItem.title;
        document.getElementById('item-description').textContent = selectedItem.description;
        document.getElementById('item-location').textContent = selectedItem.location;
        document.getElementById('item-date').textContent = selectedItem.date;
    }
}