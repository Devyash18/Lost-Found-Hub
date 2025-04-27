
// Wait for page to fully load
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page Loaded Successfully 🚀");

    // Filter cards based on search input
    const searchBar = document.querySelector('.search-bar');
    const cards = document.querySelectorAll('.card');

    searchBar.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        cards.forEach(card => {
            const cardText = card.innerText.toLowerCase();
            card.style.display = cardText.includes(searchText) ? 'block' : 'none';
        });
    });

    // Make cards clickable
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardTitle = card.querySelector('h2').innerText;
            alert(`You clicked on "${cardTitle}" 🎯`);
            // You can redirect to a new page if you want
            // window.location.href = "yourlink.html";
        });
    });

});