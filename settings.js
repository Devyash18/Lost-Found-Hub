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
    }
    
    // Notification Preferences Form
    if (notificationForm) {
        const emailNotif = notificationForm.querySelector('#email-notifications');
        const smsNotif = notificationForm.querySelector('#sms-notifications');
        const pushNotif = notificationForm.querySelector('#push-notifications');
        const frequencySelect = notificationForm.querySelector('#notification-frequency');
        const dndStart = notificationForm.querySelector('#do-not-disturb-start');
        const dndEnd = notificationForm.querySelector('#do-not-disturb-end');
        const updateBtn = notificationForm.querySelector('.btn-primary');
        
        updateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real app, you would send this to the server
            console.log('Notification preferences updated:', {
                emailNotifications: emailNotif.checked,
                smsNotifications: smsNotif.checked,
                pushNotifications: pushNotif.checked,
                frequency: frequencySelect.value,
                doNotDisturb: `${dndStart.value} to ${dndEnd.value}`
            });
            
            showAlert('Notification preferences updated!', 'success');
        });
    }
     // Security Settings Form
     if (securityForm) {
        const currentPass = securityForm.querySelector('#current-password');
        const newPass = securityForm.querySelector('#new-password');
        const confirmPass = securityForm.querySelector('#confirm-password');
        const changePassBtn = securityForm.querySelector('.btn-primary');
        const enable2faBtn = securityForm.querySelector('.two-factor-box .btn-outline');
        
        // Password strength indicator
        newPass.addEventListener('input', function() {
            checkPasswordStrength(newPass.value);
        });
         // Security Settings Form
    if (securityForm) {
        const currentPass = securityForm.querySelector('#current-password');
        const newPass = securityForm.querySelector('#new-password');
        const confirmPass = securityForm.querySelector('#confirm-password');
        const changePassBtn = securityForm.querySelector('.btn-primary');
        const enable2faBtn = securityForm.querySelector('.two-factor-box .btn-outline');
        
        // Password strength indicator
        newPass.addEventListener('input', function() {
            checkPasswordStrength(newPass.value);
        });
        if (!newPass.value) {
            showAlert('Please enter a new password', 'error');
            return;
        }
        
        if (newPass.value !== confirmPass.value) {
            showAlert('New passwords do not match', 'error');
            return;
        }
        
        if (!isPasswordStrong(newPass.value)) {
            showAlert('Password must be at least 8 characters with one number and one special character', 'error');
            return;
        }
          // In a real app, you would send this to the server
          console.log('Password change requested:', {
            currentPassword: currentPass.value,
            newPassword: newPass.value
        });
        
        // Clear form
        currentPass.value = '';
        newPass.value = '';
        confirmPass.value = '';
        
        showAlert('Password changed successfully!', 'success');
    });
     // Enable 2FA
     enable2faBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Simulate 2FA setup flow
        showModal(
            'Set Up Two-Factor Authentication',
            `
            <div class="two-factor-setup">
                <p>Scan this QR code with your authenticator app:</p>
                <div class="qr-code-placeholder"></div>
                <p>Or enter this code manually:</p>
                <div class="manual-code">XK34 9B72 QL89 TY21</div>
                <div class="form-group">
                    <label for="verification-code" class="form-label">Enter verification code</label>
                    <input type="text" id="verification-code" class="form-control" placeholder="6-digit code">
                </div>
            </div>
            `,
            [
                {
                    text: 'Cancel',
                    class: 'btn-outline',
                    handler: () => console.log('2FA setup canceled')
                },
                {
                    text: 'Verify & Enable',
                    class: 'btn-primary',
                    handler: () => {
                        const code = document.getElementById('verification-code').value;
                        if (!code || code.length !== 6) {
                            showAlert('Please enter a valid 6-digit code', 'error');
                            return false; // Keep modal open
                        }
                        
                        console.log('2FA enabled with code:', code);
                        enable2faBtn.innerHTML = '<i class="fas fa-lock-open"></i> Disable 2FA';
                        showAlert('Two-factor authentication enabled!', 'success');
                        return true; // Close modal
                    }
                }
            ]
        );
    });
}
 // Account Actions
 if (accountActions) {
    const downloadDataBtn = accountActions.querySelector('.full-width:not(.delete-btn)');
    const deleteAccountBtn = accountActions.querySelector('.delete-btn');
    
    // Download data
    downloadDataBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        showModal(
            'Request Data Download',
            `
            <p>We will prepare a downloadable archive containing all your personal data stored in our system.</p>
            <p>This may include:</p>
            <ul>
                <li>Your profile information</li>
                <li>Lost item reports</li>
                <li>Found item reports</li>
                <li>Messages and notifications</li>
            </ul>
            <p>The download link will be sent to your email address within 24 hours.</p>
            <div class="form-group">
                <label for="download-email" class="form-label">Email address for download link</label>
                <input type="email" id="download-email" class="form-control" value="john.doe@example.com">
            </div>
            `,
            [
                {
                    text: 'Cancel',
                    class: 'btn-outline',
                    handler: () => console.log('Data download canceled')
                },
                {
                    text: 'Request Download',
                    class: 'btn-primary',
                    handler: () => {
                        const email = document.getElementById('download-email').value;
                        if (!validateEmail(email)) {
                            showAlert('Please enter a valid email address', 'error');
                            return false;
                        }
                        
                        console.log('Data download requested for:', email);
                        showAlert('Your data download has been requested. You will receive an email when it\'s ready.', 'success');
                        return true;
                    }
                }
            ]
        );
    });
    