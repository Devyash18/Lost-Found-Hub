const items = [
    {
        id: 1,
        title: "Lost Wallet",
        description: "A black leather wallet containing credit cards, a driver's license, and some cash. The wallet has sentimental value as it was a gift. It was last seen near Tesla Block.",
        location: "Tesla Block",
        date: "15 June 2023",
        image: "https://i.pinimg.com/736x/65/36/a4/6536a4fd58a8caccc905733477fcfc0d.jpg"
    },
    {
        id: 2,
        title: "Found iPhone",
        description: "An iPhone 12 with a blue case. The phone is locked and has a small scratch on the back. It was found near Square One. If this belongs to you, please provide proof of ownership.",
        location: "Square One",
        date: "10 June 2023",
        image: "https://i.pinimg.com/736x/c2/0f/2a/c20f2a16bd32dbb321041bc2477818e7.jpg"
    },
    {
        id: 3,
        title: "Lost Keys",
        description: "A set of car and house keys attached to a red keychain with the initials 'J.D.' engraved. The keys were last seen near the Main Entrance.",
        location: "Main Entrance",
        date: "5 June 2023",
        image: "https://bettystreff.com/wp-content/uploads/2017/07/keys.jpg"
    },
    {
        id: 4,
        title: "Found Watch",
        description: "A silver wristwatch found near the fountain. The watch has a black leather strap and the brand name 'Seiko' engraved on the back.",
        location: "Fountain",
        date: "28 May 2023",
        image: "https://i.ebayimg.com/images/g/TnIAAOSwqeRlPVxr/s-l400.jpg"
    },
    {
        id: 5,
        title: "Lost Backpack",
        description: "A blue backpack containing a laptop, notebooks, and a water bottle. The backpack has a small tear on the side pocket. It was last seen at the University Library.",
        location: "University Library",
        date: "20 May 2023",
        image: "https://i.ebayimg.com/images/g/FKAAAOSwonJmgzIQ/s-l400.jpg"
    },
    {
        id: 6,
        title: "Found Sunglasses",
        description: "A pair of Ray-Ban aviator sunglasses found in the parking lot. The sunglasses are in good condition and were found without a case.",
        location: "Parking Lot",
        date: "15 May 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngiB-L4wa7pS0e94IZCZVrXmRIhNvQP7hTqD-olzwUfl-Lkt_JnfLUpbH_Wf5LXvdvDU&usqp=CAU"
    },
    {
        id: 7,
        title: "Lost Glasses",
        description: "A pair of black-rimmed prescription glasses. The glasses were last seen in the Alpha Zone. They are essential for reading and daily use.",
        location: "Alpha Zone",
        date: "12 May 2023",
        image: "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/eIkAAOSwvy5lGkde/$_12.JPG?set_id=880000500F"
    },
    {
        id: 8,
        title: "Found Umbrella",
        description: "A blue umbrella found at the bus stop. The umbrella has a small logo of 'Rainy Days' printed on the handle.",
        location: "Bus Stop",
        date: "10 May 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1LBQLdpth2JrMLn8qERRqygj1eMvaBjNN7A&s"
    },
    {
        id: 9,
        title: "Found Book",
        description: "A hardcover book titled 'The Great Gatsby' found in the library. The book has a bookmark with the name 'Emily' written on it.",
        location: "Library",
        date: "8 May 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJ9Rlz5DpA8MXu16gzvgLUiNiyPQJpbNBOA&s"
    },
    {
        id: 10,
        title: "Lost Headphones",
        description: "A pair of black wireless headphones. The headphones were last seen near the boys' hostel. They are essential for work and leisure.",
        location: "Near Boys Hostel",
        date: "5 May 2023",
        image: "https://di2ponv0v5otw.cloudfront.net/posts/2022/09/29/633659ff2fbf1a30e994223a/m_63365a177dfcc28e8bb48156.jpg"
    },
    {
        id: 11,
        title: "Found Ring",
        description: "A gold ring with a diamond found near the Flaming Block. The ring has an engraving on the inside with the initials 'A.R.'",
        location: "Flaming Block",
        date: "2 May 2023",
        image: "https://shop.kenanddanadesign.com/cdn/shop/products/IMG_1381_7ba77f24-c6f5-4e84-8999-64151428d647.jpg?v=1733934429&width=1946"
    },
    {
        id: 12,
        title: "Lost Phone Charger",
        description: "A black phone charger found in the library. The charger is compatible with most Android devices and has a small scratch on the plug.",
        location: "Library",
        date: "1 May 2023",
        image: "https://apollo.olx.in/v1/files/u7j5tm2awz9v1-ADVIN/image;s=300x600;q=60"
    },
    {
        id: 13,
        title: "Found Scarf",
        description: "A red scarf found at the Pythagoras Block. The scarf is made of wool and has a small tag with the brand name 'Winter Warmers.'",
        location: "Pythagoras Block",
        date: "30 April 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkp0-RcbdkWP1WuyBrh116DqMQFdsvaCUezg&s"
    },
    {
        id: 14,
        title: "Lost Camera",
        description: "A digital camera with a black case. The camera contains important photos and was last seen in the Omega Zone.",
        location: "Omega Zone",
        date: "28 April 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LDQ81d2sXwAeAOZxevtOA4vs3aWQAh_dIgscBUiBCCLjOK6V38lQJlWJ7JZvzXAWFEY&usqp=CAU"
    },
    {
        id: 15,
        title: "Found Locket",
        description: "A silver locket with a heart pendant found near Square One. The locket opens to reveal a small photo inside.",
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