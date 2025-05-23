const items = [
    {
        id: 1,
        title: "Lost Wallet",
        description: "A black leather wallet containing credit cards, a driver's license, and some cash. The wallet has sentimental value as it was a gift. It was last seen near Tesla Block.",
        location: "Tesla Block",
        date: "15 June 2023",
        status: "lost", // Added status field
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuwwjJYpkBMKSlpwszfXP_llkhmViIQixo3Q&s"
    },
    {
        id: 2,
        title: "Found iPhone",
        description: "An iPhone 12 with a blue case. The phone is locked and has a small scratch on the back. It was found near Square One. If this belongs to you, please provide proof of ownership.",
        location: "Square One",
        date: "10 June 2023",
        status: "found", // Added status field
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQELTlvTr3Z3WLD56BctGEQraOzG0g61CASAemP7AQTwYXUCDk9NGRrJlLdwbmWgfasNo8&usqp=CAU"
    },
    {
        id: 3,
        title: "Lost Keys",
        description: "A set of car and house keys attached to a red keychain with the initials 'J.D.' engraved. The keys were last seen near the Main Entrance.",
        location: "Main Entrance",
        date: "5 June 2023",
        status: "lost",
        image: "https://bettystreff.com/wp-content/uploads/2017/07/keys.jpg"
    },
    {
        id: 4,
        title: "Found Watch",
        description: "A silver wristwatch found near the fountain. The watch has a black leather strap and the brand name 'Seiko' engraved on the back.",
        location: "Fountain",
        date: "28 May 2023",
        status: "found",
        image: "https://i.ebayimg.com/images/g/TnIAAOSwqeRlPVxr/s-l400.jpg"
    },
    {
        id: 5,
        title: "Lost Backpack",
        description: "A blue backpack containing a laptop, notebooks, and a water bottle. The backpack has a small tear on the side pocket. It was last seen at the University Library.",
        location: "University Library",
        date: "20 May 2023",
        status: "lost",
        image: "https://i.ebayimg.com/images/g/FKAAAOSwonJmgzIQ/s-l400.jpg"
    },
    {
        id: 6,
        title: "Found Sunglasses",
        description: "A pair of Ray-Ban aviator sunglasses found in the parking lot. The sunglasses are in good condition and were found without a case.",
        location: "Parking Lot",
        date: "15 May 2023",
        status: "found",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngiB-L4wa7pS0e94IZCZVrXmRIhNvQP7hTqD-olzwUfl-Lkt_JnfLUpbH_Wf5LXvdvDU&usqp=CAU"
    },
    {
        id: 7,
        title: "Lost Glasses",
        description: "A pair of black-rimmed prescription glasses. The glasses were last seen in the Alpha Zone. They are essential for reading and daily use.",
        location: "Alpha Zone",
        date: "12 May 2023",
        status: "lost",
        image: "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/eIkAAOSwvy5lGkde/$_12.JPG?set_id=880000500F"
    },
    {
        id: 8,
        title: "Found Umbrella",
        description: "A blue umbrella found at the bus stop. The umbrella has a small logo of 'Rainy Days' printed on the handle.",
        location: "Bus Stop",
        date: "10 May 2023",
        status: "found",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1LBQLdpth2JrMLn8qERRqygj1eMvaBjNN7A&s"
    },
    {
        id: 9,
        title: "Found Book",
        description: "A hardcover book titled 'The Great Gatsby' found in the library. The book has a bookmark with the name 'Emily' written on it.",
        location: "Library",
        date: "8 May 2023",
        status: "found",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJ9Rlz5DpA8MXu16gzvgLUiNiyPQJpbNBOA&s"
    },
    {
        id: 10,
        title: "Lost Headphones",
        description: "A pair of black wireless headphones. The headphones were last seen near the boys' hostel. They are essential for work and leisure.",
        location: "Near Boys Hostel",
        date: "5 May 2023",
        status: "lost",
        image: "https://di2ponv0v5otw.cloudfront.net/posts/2022/09/29/633659ff2fbf1a30e994223a/m_63365a177dfcc28e8bb48156.jpg"
    },
    {
        id: 11,
        title: "Found Ring",
        description: "A gold ring with a diamond found near the Flaming Block. The ring has an engraving on the inside with the initials 'A.R.'",
        location: "Flaming Block",
        date: "2 May 2023",
        status: "found",
        image: "https://shop.kenanddanadesign.com/cdn/shop/products/IMG_1381_7ba77f24-c6f5-4e84-8999-64151428d647.jpg?v=1733934429&width=1946"
    },
    {
        id: 12,
        title: "Lost Phone Charger",
        description: "A black phone charger found in the library. The charger is compatible with most Android devices and has a small scratch on the plug.",
        location: "Library",
        date: "1 May 2023",
        status: "lost",
        image: "https://www.shutterstock.com/image-photo/hand-holding-phone-charger-260nw-477029953.jpg"
    },
    {
        id: 13,
        title: "Found Scarf",
        description: "A red scarf found at the Pythagoras Block. The scarf is made of wool and has a small tag with the brand name 'Winter Warmers.'",
        location: "Pythagoras Block",
        date: "30 April 2023",
        status: "found",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkp0-RcbdkWP1WuyBrh116DqMQFdsvaCUezg&s"
    },
    {
        id: 14,
        title: "Lost Camera",
        description: "A digital camera with a black case. The camera contains important photos and was last seen in the Omega Zone.",
        location: "Omega Zone",
        date: "28 April 2023",
        status: "lost",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LDQ81d2sXwAeAOZxevtOA4vs3aWQAh_dIgscBUiBCCLjOK6V38lQJlWJ7JZvzXAWFEY&usqp=CAU"
    },
    {
        id: 15,
        title: "Found Locket",
        description: "A silver locket with a heart pendant found near Square One. The locket opens to reveal a small photo inside.",
        location: "Square One",
        date: "25 April 2023",
        status: "found",
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

    // Dynamically set the button text and tooltip based on the item's status
    const claimButton = document.getElementById('claim-button');
    if (item.status === "lost") {
        claimButton.textContent = "Found";
        claimButton.setAttribute('data-tooltip', 'Mark this item as found');
    } else if (item.status === "found") {
        claimButton.textContent = "Claim";
        claimButton.setAttribute('data-tooltip', 'Claim this item if it belongs to you');
    }

    // Set the status badge
    const statusBadge = document.getElementById('item-status-badge');
    statusBadge.textContent = item.status === 'lost' ? 'Lost' : 'Found';
    statusBadge.classList.add(item.status === 'lost' ? 'status-lost' : 'status-found');

    // Populate Open Graph meta tags
    document.getElementById('og-title').setAttribute('content', item.title);
    document.getElementById('og-description').setAttribute('content', item.description);
    document.getElementById('og-image').setAttribute('content', item.image);
    document.getElementById('og-url').setAttribute('content', window.location.href);
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
    alert('You have verified this item. You can now proceed.');
});

// Add functionality for the "Claim" or "Found" button
document.getElementById('claim-button').addEventListener('click', () => {
    const messageElement = document.getElementById('message');
    if (!isVerified) {
        // Show the warning message if the item is not verified
        messageElement.textContent = 'Please verify the item before proceeding.';
        messageElement.style.display = 'block';
    } else {
        // Proceed with the action
        if (item.status === "lost") {
            alert('Thank you for reporting this item as found!');
        } else if (item.status === "found") {
            alert('You have successfully claimed this item.');
        }
    }
});

// Add functionality for the "Share" button
document.getElementById('share-button').addEventListener('click', () => {
    const shareData = {
        title: document.getElementById('item-title').textContent,
        text: `Check out this item on Lost & Found Hub: ${document.getElementById('item-title').textContent}\nDescription: ${document.getElementById('item-description').textContent}\nLocation: ${document.getElementById('item-location').textContent}`,
        url: window.location.href // Share the current page URL
    };

    if (navigator.share) {
        // Use the Web Share API if supported
        navigator.share(shareData)
            .then(() => console.log('Item shared successfully!'))
            .catch((error) => console.error('Error sharing:', error));
    } else {
        // Fallback: Copy the link to the clipboard
        navigator.clipboard.writeText(shareData.url)
            .then(() => {
                alert('Link copied to clipboard! You can now share it manually.');
            })
            .catch((error) => {
                console.error('Error copying link:', error);
                alert('Failed to copy the link. Please try again.');
            });
    }
});

// Add functionality for the "Add Comment" button
const commentsList = document.getElementById('comments-list');
const commentInput = document.getElementById('comment-input');
document.getElementById('add-comment').addEventListener('click', () => {
    const comment = commentInput.value.trim();
    if (comment) {
        const commentItem = document.createElement('li');
        commentItem.textContent = comment;
        commentsList.appendChild(commentItem);
        commentInput.value = '';
    } else {
        alert('Please enter a comment.');
    }
});