// Configuration
const DEFAULT_PROFILE_IMAGE = 'https://as1.ftcdn.net/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg';
const MAX_IMAGE_SIZE_MB = 2;

// DOM Elements
const fileInput = document.getElementById('fileInput');
const removeBtn = document.getElementById('removeImageBtn');

// Core Functions
function updateAllProfileImages(imageUrl) {
    document.querySelectorAll('.profile-image').forEach(img => {
        img.src = imageUrl || DEFAULT_PROFILE_IMAGE;
    });
}

function handleRemoveImage() {
    try {
        localStorage.removeItem('profileImage');
        updateAllProfileImages(DEFAULT_PROFILE_IMAGE);
        if (fileInput) fileInput.value = '';
        showToast('Profile image reset to default');
    } catch (error) {
        console.error('Remove image error:', error);
        showToast('Error resetting image');
    }
}

// Event Handlers
function setupEventListeners() {
    removeBtn?.addEventListener('click', handleRemoveImage);
    
    fileInput?.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (!file.type.match('image.*')) {
            showToast('Please select an image file');
            return;
        }

        if (file.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
            showToast(`Image too large! Max ${MAX_IMAGE_SIZE_MB}MB allowed.`);
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                localStorage.setItem('profileImage', e.target.result);
                updateAllProfileImages(e.target.result);
                showToast('Profile image updated!');
            } catch (error) {
                console.error('Upload error:', error);
                showToast('Error saving image');
            }
        };
        reader.onerror = () => {
            showToast('Error reading image file');
        };
        reader.readAsDataURL(file);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateAllProfileImages(localStorage.getItem('profileImage'));
    setupEventListeners();
});