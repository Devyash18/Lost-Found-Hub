document.addEventListener('DOMContentLoaded', function() {
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

  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Spinner logic
  const spinner = document.getElementById('loading-spinner');
  if (spinner) {
    spinner.style.display = 'flex'; // Show immediately

    window.addEventListener('load', function() {
      spinner.style.opacity = '0';
      setTimeout(() => {
        spinner.style.display = 'none'; // Hide after fade out
      }, 500); // Matches the 0.5s fade out
    });
  }
});
