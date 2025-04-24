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