// Example data for items (copied from listings.js)
const items = [
    {
        id: 1,
        title: "Lost Wallet",
        description: "Black leather wallet with credit cards inside.",
        location: "Tesla Block",
        date: "15 June 2023",
        image: "https://i.pinimg.com/736x/65/36/a4/6536a4fd58a8caccc905733477fcfc0d.jpg"
    },
    {
        id: 2,
        title: "Found iPhone",
        description: "iPhone 12 with blue case.",
        location: "Square One",
        date: "10 June 2023",
        image: "https://i.pinimg.com/736x/c2/0f/2a/c20f2a16bd32dbb321041bc2477818e7.jpg"
    },
    {
        id: 3,
        title: "Lost Keys",
        description: "Set of car and house keys.",
        location: "Main Entrance",
        date: "5 June 2023",
        image: "https://bettystreff.com/wp-content/uploads/2017/07/keys.jpg"
    },
    {
        id: 4,
        title: "Found Watch",
        description: "Silver wristwatch near the fountain.",
        location: "Fountain",
        date: "28 May 2023",
        image: "https://i.ebayimg.com/images/g/TnIAAOSwqeRlPVxr/s-l400.jpg"
    },
    {
        id: 5,
        title: "Lost Backpack",
        description: "Blue backpack with a laptop inside.",
        location: "University Library",
        date: "20 May 2023",
        image: "https://i.ebayimg.com/images/g/FKAAAOSwonJmgzIQ/s-l400.jpg"
    },
    {
        id: 6,
        title: "Found Sunglasses",
        description: "Rayban aviator sunglasses.",
        location: "Parking Lot",
        date: "15 May 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngiB-L4wa7pS0e94IZCZVrXmRIhNvQP7hTqD-olzwUfl-Lkt_JnfLUpbH_Wf5LXvdvDU&usqp=CAU"
    },
    {
        id: 7,
        title: "Lost Glasses",
        description: "Pair of black-rimmed glasses.",
        location: "Alpha Zone",
        date: "12 May 2023",
        image: "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/eIkAAOSwvy5lGkde/$_12.JPG?set_id=880000500F"
    },
    {
        id: 8,
        title: "Found Umbrella",
        description: "Blue umbrella found at the bus stop.",
        location: "Bus Stop",
        date: "10 May 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1LBQLdpth2JrMLn8qERRqygj1eMvaBjNN7A&s"
    },
    {
        id: 9,
        title: "Found Book",
        description: "Hardcover book titled 'The Great Gatsby' found in the library.",
        location: "Library",
        date: "8 May 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJ9Rlz5DpA8MXu16gzvgLUiNiyPQJpbNBOA&s"
    },
    {
        id: 10,
        title: "Lost Headphones",
        description: "Black wireless headphones.",
        location: "Near Boys Hostel",
        date: "5 May 2023",
        image: "https://di2ponv0v5otw.cloudfront.net/posts/2022/09/29/633659ff2fbf1a30e994223a/m_63365a177dfcc28e8bb48156.jpg"
    },
    {
        id: 11,
        title: "Found Ring",
        description: "Gold ring with a diamond.",
        location: "Flaming Block",
        date: "2 May 2023",
        image: "https://shop.kenanddanadesign.com/cdn/shop/products/IMG_1381_7ba77f24-c6f5-4e84-8999-64151428d647.jpg?v=1733934429&width=1946"
    },
    {
        id: 12,
        title: "Lost Phone Charger",
        description: "Black phone charger found in the library.",
        location: "Library",
        date: "1 May 2023",
        image: "https://apollo.olx.in/v1/files/u7j5tm2awz9v1-ADVIN/image;s=300x600;q=60"
    },
    {
        id: 13,
        title: "Found Scarf",
        description: "Red scarf found at the Pythagoras block.",
        location: "Pythagoras Block",
        date: "30 April 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkp0-RcbdkWP1WuyBrh116DqMQFdsvaCUezg&s"
    },
    {
        id: 14,
        title: "Lost Camera",
        description: "Digital camera with a black case.",
        location: "Omega Zone",
        date: "28 April 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LDQ81d2sXwAeAOZxevtOA4vs3aWQAh_dIgscBUiBCCLjOK6V38lQJlWJ7JZvzXAWFEY&usqp=CAU"
    },
    {
        id: 15,
        title: "Found Locket",
        description: "Silver locket with a heart pendant.",
        location: "Square One",
        date: "25 April 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2t18BKLiE0Ix5WGqc6SCfW6xHaLZ_B36QYwDYJOvl4bE7P8UTVltb762rdTIrIiXWS5E&usqp=CAU"
    }
];

// Get the item ID from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const itemId = parseInt(urlParams.get('id'), 10);

// Find the item in the items data
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