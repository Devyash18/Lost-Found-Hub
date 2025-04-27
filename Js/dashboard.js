document.addEventListener('DOMContentLoaded', function () {
  // Animate progress circles
  const progressCircles = document.querySelectorAll('.progress-ring circle');

  progressCircles.forEach(circle => {
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const parent = circle.closest('.progress-circle');
    const value = parseInt(parent.getAttribute('data-value'));

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference - (value / 100) * circumference;
    circle.style.stroke = 'white';
  });

  // Tab functionality
  const tabButtons = document.querySelectorAll('.tab-btn');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      // Add tab content loading logic here if needed
    });
  });

  // Notification bell animation
  const notificationBell = document.querySelector('.notifications');

  if (notificationBell) {
    notificationBell.addEventListener('click', () => {
      notificationBell.classList.add('animate__animated', 'animate__shakeX');

      setTimeout(() => {
        notificationBell.classList.remove('animate__animated', 'animate__shakeX');
      }, 1000);
    });
  }

  // Bootstrap tooltips (if using Bootstrap 5+ and tooltips are needed)
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // ✅ Spinner logic - clean and correct
  const spinner = document.getElementById('loading-spinner');

  if (spinner) {
    spinner.style.display = 'flex';

    setTimeout(() => {
      spinner.classList.add('hidden');

      setTimeout(() => {
        spinner.remove();
      }, 500); // Matches CSS fade transition
    }, 300);
  }
});
// Load profile image on every page
document.addEventListener('DOMContentLoaded', function() {
  const savedImage = localStorage.getItem('profileImage');
  const defaultImage = 'https://example.com/default-profile.jpg'; // Same default as above
  const profileImages = document.querySelectorAll('.profile-image'); // Match all profile images
  
  profileImages.forEach(img => {
      img.src = savedImage || defaultImage;
  });
});
