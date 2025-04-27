// Example JS if you want dynamic features
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`You clicked on "${card.querySelector('h2').innerText}"`);
    });
});