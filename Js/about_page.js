function toggleMore() {
  const moreText = document.getElementById("moreText");
  const btn = document.getElementById("readMoreBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Set initial state for more text
  document.getElementById("moreText").style.display = "none";
  
  // Highlight active menu item
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.classList.remove('active');
    if (item.dataset.page === 'about') {
      item.classList.add('active');
    }
  });

  // Logout functionality
  document.getElementById('logoutBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      window.location.href = "Login page/login.html";
    }
  });
});