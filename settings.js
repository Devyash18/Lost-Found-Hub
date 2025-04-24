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
                        
                        console.log('Account deletion confirmed');
                        // In a real app, you would send this to the server
                        showAlert('Your account has been scheduled for deletion. You will receive a confirmation email.', 'info');
                        
                        // Simulate logout after deletion
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