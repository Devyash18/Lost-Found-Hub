document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const button = e.target.querySelector("button");

    // Remove any existing error messages
    const errorMessage = document.querySelector(".error-message");
    errorMessage.style.display = "none";

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!email.endsWith("@chitkara.edu.in")) {
        errorMessage.style.display = "block"; // Show the error message
        return;
    }

    button.textContent = "Sending...";
    button.disabled = true;

    setTimeout(() => {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset(); // Clears the form
        button.textContent = "Contact Us";
        button.disabled = false;
    }, 2000);
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
