document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const profileForm = document.querySelector('.settings-card:nth-child(1)');
    const notificationForm = document.querySelector('.settings-card:nth-child(2)');
    const securityForm = document.querySelector('.settings-card:nth-child(3)');
    const accountActions = document.querySelector('.settings-card:nth-child(4)');
     // Profile Information Form
     if (profileForm) {
        const usernameInput = profileForm.querySelector('#username');
        const emailInput = profileForm.querySelector('#email');
        const phoneInput = profileForm.querySelector('#phone');
        const saveBtn = profileForm.querySelector('.btn-primary');
        const cancelBtn = profileForm.querySelector('.btn-outline');
             // Store original values for cancel functionality
             const originalValues = {
                username: usernameInput.value,
                email: emailInput.value,
                phone: phoneInput.value
            };
            
            // Save profile changes
            saveBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Simple validation
                if (!usernameInput.value.trim()) {
                    showAlert('Username cannot be empty', 'error');
                    return;
                }
                if (!validateEmail(emailInput.value)) {
                    showAlert('Please enter a valid email address', 'error');
                    return;
                }
                
                // In a real app, you would send this to the server
                console.log('Profile updated:', {
                    username: usernameInput.value,
                    email: emailInput.value,
                    phone: phoneInput.value
                });
                   // Update original values
            originalValues.username = usernameInput.value;
            originalValues.email = emailInput.value;
            originalValues.phone = phoneInput.value;
            
            showAlert('Profile updated successfully!', 'success');
        });
        
        // Cancel changes
        cancelBtn.addEventListener('click', function(e) {
            e.preventDefault();
            usernameInput.value = originalValues.username;
            emailInput.value = originalValues.email;
            phoneInput.value = originalValues.phone;
            showAlert('Changes discarded', 'info');
        });