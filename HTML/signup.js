document.addEventListener('DOMContentLoaded', () => {
    // Initialize page animations
    const container = document.querySelector('.container');
    container.classList.add('hidden');
    setTimeout(() => {
      container.classList.remove('hidden');
    }, 10);
  
    // Password toggle functionality
    const togglePasswordBtn = document.querySelector('.toggle-password');
    togglePasswordBtn.addEventListener('click', () => {
      const input = document.getElementById("password");
      const icon = togglePasswordBtn.querySelector("i");
      if (input.type === "password") {
        input.type = "text";
        icon.classList.replace("fa-eye", "fa-eye-slash");
      } else {
        input.type = "password";
        icon.classList.replace("fa-eye-slash", "fa-eye");
      }
    });
  
    // Page transition for login link
    document.querySelector('.footer a').addEventListener('click', (event) => {
      event.preventDefault();
      const container = document.querySelector('.container');
      container.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = event.target.getAttribute('href');
      }, 400);
    });
  
    // Email validation for Chitkara domain
    function validateChitkaraEmail(email) {
      return email.toLowerCase().endsWith('@chitkara.edu.in');
    }
  
    // Password validation
    function validatePassword(password) {
      return password.length >= 8;
    }
  
    // Form submission handler
    document.getElementById('signupForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const emailError = document.getElementById('emailError');
      const passwordError = document.getElementById('passwordError');
      let isValid = true;
      
      // Validate email
      if (!validateChitkaraEmail(email)) {
        emailError.style.display = 'block';
        isValid = false;
      } else {
        emailError.style.display = 'none';
      }
      
      // Validate password
      if (!validatePassword(password)) {
        passwordError.style.display = 'block';
        isValid = false;
      } else {
        passwordError.style.display = 'none';
      }
      
      // If validation passes, proceed with form submission
      if (isValid) {
        // Here you would typically send the data to your server
        console.log('Signup data:', {
          name: document.getElementById('name').value,
          email: email,
          password: password
        });
        alert('Account created successfully! Redirecting to login...');
        // Simulate redirect to login page
        setTimeout(() => {
          window.location.href = 'login.html'; // Change to your login page URL
        }, 1500);

        // In production: document.getElementById('signupForm').submit();
      }
    });
  });