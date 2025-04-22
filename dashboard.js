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
        // Here you would load the appropriate content
      });
    });
    
    // Notification bell animation
    const notificationBell = document.querySelector('.notifications');
    
    notificationBell.addEventListener('click', () => {
      notificationBell.classList.add('animate__animated', 'animate__shakeX');
      
      setTimeout(() => {
        notificationBell.classList.remove('animate__animated', 'animate__shakeX');
      }, 1000);
    });
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });