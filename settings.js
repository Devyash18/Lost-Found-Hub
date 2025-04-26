document.addEventListener('DOMContentLoaded', function() {
    // First get the profile form and inputs
    const profileForm = document.querySelector('.settings-card:nth-child(1)');
    const notificationForm = document.querySelector('.settings-card:nth-child(2)');
    const securityForm = document.querySelector('.settings-card:nth-child(3)');
    const accountActions = document.querySelector('.settings-card:nth-child(4)');

    // Get profile inputs
    const usernameInput = profileForm ? profileForm.querySelector('#username') : null;
    const emailInput = profileForm ? profileForm.querySelector('#email') : null;
    const phoneInput = profileForm ? profileForm.querySelector('#phone') : null;

    // Then initialize userData
    const userData = JSON.parse(localStorage.getItem('userSettings')) || {
        profile: {
            username: usernameInput?.value || 'John Doe',
            email: emailInput?.value || 'john.doe@example.com',
            phone: phoneInput?.value || '+1234567890'
        },
        notifications: {
            email: true,
            sms: false,
            push: true,
            frequency: 'daily',
            dndStart: '22:00',
            dndEnd: '07:00'
        },
        security: {
            twoFactorEnabled: false
        }
    };
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

    // Load saved values from userData
    usernameInput.value = userData.profile.username;
    emailInput.value = userData.profile.email;
    phoneInput.value = userData.profile.phone;

    // Update originalValues to match loaded data
    originalValues.username = usernameInput.value;
    originalValues.email = emailInput.value;
    originalValues.phone = phoneInput.value;

    // Save profile changes
    saveBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (!usernameInput.value.trim()) {
            showAlert('Username cannot be empty', 'error');
            return;
        }
        if (!validateEmail(emailInput.value)) {
            showAlert('Please enter a valid email address', 'error');
            return;
        }

        // Update userData and localStorage
        userData.profile = {
            username: usernameInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        };
        localStorage.setItem('userSettings', JSON.stringify(userData));
        
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

    // Load saved preferences
    emailNotif.checked = userData.notifications.email;
    smsNotif.checked = userData.notifications.sms;
    pushNotif.checked = userData.notifications.push;
    frequencySelect.value = userData.notifications.frequency;
    
    // Set time values - make sure these match your HTML options
    dndStart.value = userData.notifications.dndStart;
    dndEnd.value = userData.notifications.dndEnd;

    updateBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Update the userData object
        userData.notifications = {
            email: emailNotif.checked,
            sms: smsNotif.checked,
            push: pushNotif.checked,
            frequency: frequencySelect.value,
            dndStart: dndStart.value,
            dndEnd: dndEnd.value
        };

        // Save to localStorage
        localStorage.setItem('userSettings', JSON.stringify(userData));
        
        console.log('Saved notifications:', userData.notifications); // Debug log
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
    const passwordStrengthBadge = document.getElementById('password-strength') || createPasswordStrengthBadge();

    // Initialize 2FA status
    if (userData.security.twoFactorEnabled) {
        enable2faBtn.innerHTML = '<i class="fas fa-lock-open"></i> Disable 2FA';
    }

    // Password strength indicator
    newPass.addEventListener('input', function() {
        checkPasswordStrength(newPass.value);
    });

    // Change password functionality
    changePassBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Clear previous alerts
        const existingAlert = document.querySelector('.custom-alert');
        if (existingAlert) existingAlert.remove();

        // Validation
        if (!currentPass.value) {
            showAlert('Please enter your current password', 'error');
            return;
        }
        
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

        // In a real app, you would verify current password with server here
        // For demo, we'll just update the stored password
        userData.security.password = newPass.value; // Store hashed password in real app
        localStorage.setItem('userSettings', JSON.stringify(userData));

        // Clear form and show success
        currentPass.value = '';
        newPass.value = '';
        confirmPass.value = '';
        passwordStrengthBadge.style.display = 'none';
        
        showAlert('Password changed successfully!', 'success');
        
        // Log the change (remove in production)
        console.log('Password changed:', {
            newPassword: newPass.value, // In real app, never log passwords
            strength: checkPasswordStrength(newPass.value)
        });
    });

    // Helper function to create password strength badge
    function createPasswordStrengthBadge() {
        const badge = document.createElement('div');
        badge.id = 'password-strength';
        badge.style.marginTop = '8px';
        badge.style.fontSize = '0.85rem';
        badge.style.borderRadius = '4px';
        badge.style.padding = '4px 8px';
        badge.style.display = 'none';
        newPass.parentNode.appendChild(badge);
        return badge;
    }

    // Enhanced password strength checker
    function checkPasswordStrength(password) {
        if (!password) {
            passwordStrengthBadge.style.display = 'none';
            return 0;
        }
        
        let strength = 0;
        const hasMinLength = password.length >= 8;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasMixedCase = /[a-z]/.test(password) && /[A-Z]/.test(password);
        
        if (hasMinLength) strength += 1;
        if (password.length >= 12) strength += 1;
        if (hasSpecialChar) strength += 1;
        if (hasNumber) strength += 1;
        if (hasMixedCase) strength += 1;
        
        // Visual feedback
        passwordStrengthBadge.style.display = 'inline-block';
        if (strength <= 2) {
            passwordStrengthBadge.textContent = 'Weak';
            passwordStrengthBadge.style.backgroundColor = 'rgba(239, 35, 60, 0.1)';
            passwordStrengthBadge.style.color = 'var(--danger)';
        } else if (strength <= 4) {
            passwordStrengthBadge.textContent = 'Medium';
            passwordStrengthBadge.style.backgroundColor = 'rgba(248, 150, 30, 0.1)';
            passwordStrengthBadge.style.color = 'var(--warning)';
        } else {
            passwordStrengthBadge.textContent = 'Strong';
            passwordStrengthBadge.style.backgroundColor = 'rgba(76, 201, 240, 0.1)';
            passwordStrengthBadge.style.color = 'var(--success)';
        }
        
        return strength;
    }
     // ====== 2FA Implementation ======
enable2faBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (userData.security.twoFactorEnabled) {
        // Disable 2FA
        if (confirm('Are you sure you want to disable two-factor authentication?')) {
            userData.security.twoFactorEnabled = false;
            userData.security.twoFactorSecret = null;
            localStorage.setItem('userSettings', JSON.stringify(userData));
            enable2faBtn.innerHTML = '<i class="fas fa-lock"></i> Enable 2FA';
            showAlert('Two-factor authentication has been disabled', 'success');
        }
    } else {
        // Enable 2FA - Generate new secret
        const secret = generateRandomSecret();
        const email = userData.profile.email || 'user@example.com';
        const issuer = 'Lost & Found System';
        const qrCodeUrl = generateQRCodeUrl(issuer, email, secret);
        
        // Generate timestamp for cache busting
        const timestamp = new Date().getTime();
        const cachedQrCodeUrl = `${qrCodeUrl}&timestamp=${timestamp}`;

        showModal(
            'Set Up Two-Factor Authentication',
            `
            <div class="two-factor-setup">
                <div class="setup-instructions">
                    <p>1. Open your authenticator app (Google Authenticator, Authy, etc.)</p>
                    <p>2. Scan this QR code:</p>
                </div>
                
                <div class="qr-code-container">
                    <img src="${cachedQrCodeUrl}" alt="QR Code" class="qr-code-image" 
                         onerror="this.onerror=null;this.src='${qrCodeUrl}'">
                    <div class="qr-code-fallback" style="display:none">
                        Unable to load QR code. Please use manual entry.
                    </div>
                </div>
                
                <div class="manual-setup">
                    <p>3. Or enter this code manually:</p>
                    <div class="manual-code-container">
                        <code class="manual-code">${formatSecretForDisplay(secret)}</code>
                        <button class="btn-copy" title="Copy to clipboard">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                </div>
                
                <div class="verification-section">
                    <p>4. Enter the 6-digit code from your app:</p>
                    <div class="form-group">
                        <input type="text" id="verification-code" 
                               class="form-control" 
                               placeholder="123456"
                               maxlength="6"
                               inputmode="numeric"
                               pattern="\d{6}">
                        <div class="hint">Enter the current code from your authenticator app</div>
                    </div>
                </div>
            </div>
            `,
            [
                {
                    text: 'Cancel',
                    class: 'btn-outline',
                    handler: () => {
                        console.log('2FA setup canceled');
                        return true;
                    }
                },
                {
                    text: 'Verify & Enable',
                    class: 'btn-primary',
                    handler: () => {
                        const codeInput = document.getElementById('verification-code');
                        const code = codeInput.value.trim();
                        
                        if (!code || !/^\d{6}$/.test(code)) {
                            showAlert('Please enter a valid 6-digit code', 'error');
                            codeInput.focus();
                            return false;
                        }
                        
                        // In a real app, verify against the secret here
                        // For demo, we'll assume it's valid
                        userData.security.twoFactorEnabled = true;
                        userData.security.twoFactorSecret = secret;
                        localStorage.setItem('userSettings', JSON.stringify(userData));
                        
                        enable2faBtn.innerHTML = '<i class="fas fa-lock-open"></i> Disable 2FA';
                        showAlert('Two-factor authentication enabled successfully!', 'success');
                        return true;
                    }
                }
            ]
        );

        // Add copy functionality after modal renders
        setTimeout(() => {
            const copyBtn = document.querySelector('.btn-copy');
            if (copyBtn) {
                copyBtn.addEventListener('click', function() {
                    const secretText = document.querySelector('.manual-code').textContent;
                    navigator.clipboard.writeText(secretText.replace(/\s/g, ''));
                    showAlert('Secret code copied to clipboard!', 'info');
                });
            }
        }, 100);
    }
});

// Helper Functions
function generateRandomSecret() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'; // Base32 characters
    const secretLength = 16;
    let secret = '';
    
    for (let i = 0; i < secretLength; i++) {
        secret += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return secret;
}

function generateQRCodeUrl(issuer, accountName, secret) {
    const params = new URLSearchParams({
        secret: secret,
        issuer: issuer,
        algorithm: 'SHA1',
        digits: 6,
        period: 30
    });
    
    const otpUrl = `otpauth://totp/${encodeURIComponent(issuer)}:${encodeURIComponent(accountName)}?${params}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(otpUrl)}`;
}

function formatSecretForDisplay(secret) {
    return secret.match(/.{4}/g).join(' ');
}

// Styles (add to your existing styles)
const twoFactorStyles = document.createElement('style');
twoFactorStyles.textContent = `
    .two-factor-setup {
        text-align: center;
        max-width: 100%;
    }
    
    .setup-instructions {
        text-align: left;
        margin-bottom: 1.5rem;
    }
    
    .setup-instructions p {
        margin: 0.5rem 0;
    }
    
    .qr-code-container {
        margin: 1rem auto;
        padding: 1rem;
        background: white;
        border-radius: 8px;
        display: inline-block;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .qr-code-image {
        width: 200px;
        height: 200px;
        display: block;
    }
    
    .qr-code-fallback {
        padding: 1rem;
        color: var(--danger);
    }
    
    .manual-setup {
        margin: 1.5rem 0;
    }
    
    .manual-code-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin: 1rem 0;
    }
    
    .manual-code {
        font-family: 'Courier New', monospace;
        font-size: 1.2rem;
        letter-spacing: 1px;
        padding: 0.75rem 1rem;
        background-color: #f8f9fa;
        border-radius: 6px;
        border: 1px solid #dee2e6;
    }
    
    .btn-copy {
        background: none;
        border: none;
        color: var(--primary);
        cursor: pointer;
        font-size: 1.2rem;
        padding: 0.5rem;
    }
    
    .verification-section {
        margin-top: 2rem;
    }
    
    .verification-section .form-group {
        max-width: 300px;
        margin: 0 auto;
    }
    
    .hint {
        font-size: 0.85rem;
        color: #6c757d;
        margin-top: 0.5rem;
    }
`;
document.head.appendChild(twoFactorStyles);
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
    // Delete account
    deleteAccountBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        showModal(
            'Delete Your Account',
            `
            <div class="delete-warning">
                <div class="warning-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <h3>This action cannot be undone</h3>
                <p>All your data will be permanently deleted, including:</p>
                <ul>
                    <li>Your profile information</li>
                    <li>All lost and found item reports</li>
                    <li>Messages and notifications</li>
                </ul>
                <p>You will not be able to recover this information later.</p>
                <div class="form-group">
                    <label for="delete-confirm" class="form-label">To confirm, type "DELETE" below</label>
                    <input type="text" id="delete-confirm" class="form-control" placeholder="DELETE">
                </div>
            </div>
            `,
            [
                {
                    text: 'Cancel',
                    class: 'btn-outline',
                    handler: () => console.log('Account deletion canceled')
                },
                {
                    text: 'Permanently Delete',
                    class: 'btn-danger',
                    handler: () => {
                        const confirmation = document.getElementById('delete-confirm').value;
                        if (confirmation !== 'DELETE') {
                            showAlert('Please type "DELETE" to confirm', 'error');
                            return false;
                        }
                        
                        localStorage.removeItem('userSettings');
                        showAlert('Your account has been scheduled for deletion. You will receive a confirmation email.', 'info');
                        
                        setTimeout(() => {
                            window.location.href = 'logout.html';
                        }, 3000);
                        
                        return true;
                    }
                }
            ]
        );
                    
    });
}
 // Email validation
 function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Password strength check
function isPasswordStrong(password) {
    // At least 8 characters, one number, one special character
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return re.test(password);
}

function checkPasswordStrength(password) {
    const strengthBadge = document.getElementById('password-strength');
    // Create badge if it doesn't exist
    if (!strengthBadge) {
        const newBadge = document.createElement('div');
        newBadge.id = 'password-strength';
        newBadge.style.marginTop = '8px';
        newBadge.style.fontSize = '0.85rem';
        newBadge.style.borderRadius = '4px';
        newBadge.style.padding = '4px 8px';
        newBadge.style.display = 'inline-block';
        document.querySelector('#new-password').parentNode.appendChild(newBadge);
    }
    const badge = document.getElementById('password-strength');
        
    if (!password) {
        badge.style.display = 'none';
        return;
    }
    
    badge.style.display = 'inline-block';
    
    // Strength calculation
    let strength = 0;
    
    // Length
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    
    // Contains numbers
    if (/\d/.test(password)) strength += 1;
        
     // Contains special chars
     if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
     
     // Contains both lower and upper case
     if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
     
     // Visual feedback
     if (strength <= 2) {
         badge.textContent = 'Weak';
         badge.style.backgroundColor = 'rgba(239, 35, 60, 0.1)';
         badge.style.color = 'var(--danger)';
     } else if (strength <= 4) {
         badge.textContent = 'Medium';
         badge.style.backgroundColor = 'rgba(248, 150, 30, 0.1)';
         badge.style.color = 'var(--warning)';
     } else {
         badge.textContent = 'Strong';
         badge.style.backgroundColor = 'rgba(76, 201, 240, 0.1)';
         badge.style.color = 'var(--success)';
     }
    }
    // Show alert message
    function showAlert(message, type) {
        // Remove any existing alerts
        const existingAlert = document.querySelector('.custom-alert');
        if (existingAlert) existingAlert.remove();
        
        const alert = document.createElement('div');
        alert.className = `custom-alert alert-${type}`;
        alert.innerHTML = `
            <div class="alert-content">
                <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 
                                  type === 'success' ? 'fa-check-circle' : 
                                  'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="alert-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Style the alert
        alert.style.position = 'fixed';
        alert.style.top = '20px';
        alert.style.right = '20px';
        alert.style.padding = '15px 20px';
        alert.style.borderRadius = '8px';
        alert.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        alert.style.display = 'flex';
        alert.style.alignItems = 'center';
        alert.style.justifyContent = 'space-between';
        alert.style.zIndex = '1000';
        alert.style.maxWidth = '400px';
        alert.style.animation = 'fadeIn 0.3s ease';
        
        // Type-specific styling
        if (type === 'error') {
            alert.style.backgroundColor = 'rgba(239, 35, 60, 0.1)';
            alert.style.borderLeft = '4px solid var(--danger)';
            alert.style.color = 'var(--danger)';
        } else if (type === 'success') {
            alert.style.backgroundColor = 'rgba(76, 201, 240, 0.1)';
            alert.style.borderLeft = '4px solid var(--success)';
            alert.style.color = 'var(--success)';
        } else {
            alert.style.backgroundColor = 'rgba(67, 97, 238, 0.1)';
            alert.style.borderLeft = '4px solid var(--primary)';
            alert.style.color = 'var(--primary)';
        }
        // Close button
        const closeBtn = alert.querySelector('.alert-close');
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.marginLeft = '15px';
        closeBtn.style.color = 'inherit';
        
        closeBtn.addEventListener('click', function() {
            alert.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => alert.remove(), 300);
        });
        
        document.body.appendChild(alert);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (alert.parentNode) {
                alert.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => alert.remove(), 300);
            }
        }, 5000);
    }
     // Show modal dialog
     function showModal(title, content, buttons) {
        // Remove any existing modals
        const existingModal = document.querySelector('.custom-modal');
        if (existingModal) existingModal.remove();
        
        // Create modal overlay
        const overlay = document.createElement('div');
        overlay.className = 'custom-modal-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.right = '0';
        overlay.style.bottom = '0';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '2000';
        overlay.style.animation = 'fadeIn 0.3s ease';
        
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'custom-modal';
        modal.style.backgroundColor = 'white';
        modal.style.borderRadius = '12px';
        modal.style.width = '90%';
        modal.style.maxWidth = '500px';
        modal.style.maxHeight = '90vh';
        modal.style.overflowY = 'auto';
        modal.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
        modal.style.animation = 'scaleIn 0.3s ease';
        
        // Modal header
        const modalHeader = document.createElement('div');
        modalHeader.className = 'modal-header';
        modalHeader.style.padding = '20px';
        modalHeader.style.borderBottom = '1px solid var(--gray)';
        modalHeader.style.display = 'flex';
        modalHeader.style.justifyContent = 'space-between';
        modalHeader.style.alignItems = 'center';
        
        const modalTitle = document.createElement('h3');
        modalTitle.textContent = title;
        modalTitle.style.margin = '0';
        modalTitle.style.fontSize = '1.3rem';
        modalTitle.style.color = 'var(--secondary)';
        
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.fontSize = '1.2rem';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.color = 'var(--dark-gray)';
        
        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(closeBtn);
        
        // Modal body
        const modalBody = document.createElement('div');
        modalBody.className = 'modal-body';
        modalBody.style.padding = '20px';
        modalBody.innerHTML = content;
        
        // Modal footer
        const modalFooter = document.createElement('div');
        modalFooter.className = 'modal-footer';
        modalFooter.style.padding = '15px 20px';
        modalFooter.style.borderTop = '1px solid var(--gray)';
        modalFooter.style.display = 'flex';
        modalFooter.style.justifyContent = 'flex-end';
        modalFooter.style.gap = '10px';
        
        // Add buttons to footer
        buttons.forEach(btn => {
            const button = document.createElement('button');
            button.className = `btn ${btn.class}`;
            button.textContent = btn.text;
            
            if (btn.class.includes('btn-danger')) {
                button.style.backgroundColor = 'var(--danger)';
                button.style.color = 'white';
                button.style.border = 'none';
            }
            
            button.addEventListener('click', function() {
                const shouldClose = btn.handler();
                if (shouldClose !== false) {
                    overlay.remove();
                }
            });
            
            modalFooter.appendChild(button);
        });
        
        // Close modal when clicking overlay or close button
        closeBtn.addEventListener('click', function() {
            overlay.remove();
        });
        
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
        
        // Assemble modal
        modal.appendChild(modalHeader);
        modal.appendChild(modalBody);
        modal.appendChild(modalFooter);
        overlay.appendChild(modal);
        
        document.body.appendChild(overlay);
    }
     // Add CSS animations
     const style = document.createElement('style');
     style.textContent = `
         @keyframes fadeIn {
             from { opacity: 0; }
             to { opacity: 1; }
         }
         
         @keyframes fadeOut {
             from { opacity: 1; }
             to { opacity: 0; }
         }
         
         @keyframes scaleIn {
             from { transform: scale(0.9); opacity: 0; }
             to { transform: scale(1); opacity: 1; }
         }
         
         .two-factor-setup {
             text-align: center;
         }
         
         .qr-code-placeholder {
             width: 200px;
             height: 200px;
             margin: 15px auto;
             background-color: #f5f7fb;
             border: 1px dashed #adb5bd;
             display: flex;
             align-items: center;
             justify-content: center;
             color: #adb5bd;
         }
         
         .manual-code {
             font-family: monospace;
             font-size: 1.2rem;
             letter-spacing: 1px;
             margin: 15px 0;
             padding: 10px;
             background-color: #f5f7fb;
             border-radius: 4px;
         }
         
         .delete-warning {
             text-align: center;
         }
         
         .warning-icon {
             font-size: 3rem;
             color: var(--danger);
             margin-bottom: 15px;
         }
         
         .delete-warning ul {
             text-align: left;
             margin: 15px 0;
             padding-left: 20px;
         }
         
         .delete-warning li {
             margin-bottom: 5px;
         }
     `;
     document.head.appendChild(style);
});