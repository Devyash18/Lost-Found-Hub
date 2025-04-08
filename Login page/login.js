function togglePassword() {
    const input = document.getElementById("password");
    const toggle = input.nextElementSibling;
    if (input.type === "password") {
      input.type = "text";
      toggle.textContent = "Hide";
    } else {
      input.type = "password";
      toggle.textContent = "Show";
    }
  }
  