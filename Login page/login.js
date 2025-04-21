document.addEventListener('DOMContentLoaded', function() {
  // ======================
  // 1. PAGE INITIALIZATION
  // ======================
  const container = document.querySelector('.container');
  const loginForm = document.getElementById('loginForm');
  
  // Initialize page animations
  if (container) {
    container.classList.add('hidden');
    setTimeout(() => container.classList.remove('hidden'), 10);
  }

  // ======================
  // 2. PASSWORD TOGGLE SYSTEM
  // ======================
  const passwordInput = document.getElementById('password');
  const passwordToggleBtn = document.getElementById('passwordToggle'); // Changed to ID selector

  // Nuclear option: Remove ALL possible duplicate toggles
  document.querySelectorAll('.toggle-password, .password-toggle').forEach(el => el.remove());

  // Main toggle function
  function togglePasswordVisibility() {
    if (!passwordInput || !passwordToggleBtn) return;
    
    const icon = passwordToggleBtn.querySelector('i');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
  }

  // Initialize toggle button
  if (passwordToggleBtn) {
    passwordToggleBtn.addEventListener('click', togglePasswordVisibility);
    
    // Extra protection against duplicates
    passwordInput.addEventListener('input', () => {
      const duplicates = document.querySelectorAll('#passwordToggle');
      if (duplicates.length > 1) {
        duplicates.forEach((btn, index) => index > 0 && btn.remove());
      }
    });
  }

  // ======================
  // 3. PAGE TRANSITIONS
  // ======================
  function transitionToPage(event, href) {
    event.preventDefault();
    if (container) container.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = href || 'login.html';
    }, 400);
  }

  // Initialize all transition links
  document.querySelectorAll('[data-transition]').forEach(link => {
    link.addEventListener('click', (e) => {
      transitionToPage(e, link.getAttribute('href'));
    });
  });

  // ======================
  // 4. FORM VALIDATION
  // ======================
  function validateChitkaraEmail(email) {
    return email.toLowerCase().endsWith('@chitkara.edu.in');
  }

  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const email = document.getElementById('email')?.value;
      const errorElement = document.getElementById('emailError');
      
      // Validate email
      if (!email || !validateChitkaraEmail(email)) {
        if (errorElement) errorElement.style.display = 'block';
        return false;
      }
      
      // Hide error if valid
      if (errorElement) errorElement.style.display = 'none';
      
      // In production: this.submit();
      console.log('Login submitted with:', { email });
      alert('Login successful!');
    });
  }

  // ======================
  // 5. ERROR PREVENTION
  // ======================
  // Safety checks for all critical elements
  const criticalElements = [
    '#password', '#passwordToggle', '#email', 
    '.container', '#loginForm'
  ];
  
  criticalElements.forEach(selector => {
    if (!document.querySelector(selector)) {
      console.warn(`Missing critical element: ${selector}`);
    }
  });
});




