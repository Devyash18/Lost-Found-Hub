
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

    // Add dismiss button to alerts
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        const closeButton = document.createElement('span');
        closeButton.innerHTML = '&times;';
        closeButton.style.float = 'right';
        closeButton.style.cursor = 'pointer';
        closeButton.style.fontSize = '20px';
        closeButton.style.marginLeft = '10px';

        closeButton.addEventListener('click', () => {
            alert.style.display = 'none';
        });

        alert.appendChild(closeButton);
    });

    // Page fade-in animation
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = 1;
    }, 100);
});