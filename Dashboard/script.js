// script.js

document.getElementById('itemForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const item = document.getElementById('item').value;
    const details = document.getElementById('details').value;
  
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.innerHTML = `
      <strong>${item}</strong><br>
      <em>Reported by:</em> ${name}<br>
      <p>${details}</p>
    `;
  
    document.getElementById('itemsContainer').prepend(itemDiv);
  
    document.getElementById('itemForm').reset();
  });
  