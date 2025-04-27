// Set default image URL (use your preferred placeholder)
const DEFAULT_PROFILE_IMAGE = 'https://as1.ftcdn.net/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg';

// Function to update all profile images
function updateAllProfileImages(imageUrl) {
    const profileImages = document.querySelectorAll('.profile-image');
    profileImages.forEach(img => {
        img.src = imageUrl || DEFAULT_PROFILE_IMAGE;
    });
}

// Remove profile image functionality
function handleRemoveImage() {
    localStorage.removeItem('profileImage');
    updateAllProfileImages(DEFAULT_PROFILE_IMAGE);
    document.getElementById('fileInput').value = '';
    alert('Profile image removed! Default image restored.');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedImage = localStorage.getItem('profileImage');
    updateAllProfileImages(savedImage);
    
    // Setup remove button if it exists
    document.getElementById('removeImageBtn')?.addEventListener('click', handleRemoveImage);
});