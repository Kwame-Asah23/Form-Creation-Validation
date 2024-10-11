
document.addEventListener('DOMContentLoaded', function () {


    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    form.addEventListener("submit", function () {
        event.preventDefault();

        // Initialize validation flag and messages array
        let isValid = true;
        const messages = [];

        // Check if username length is less than 3
        if (username.length > 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.")

        }

        // Check if username length is less than 3
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Email must include both '@' and '.' characters.");
        }

        // Check if email length is less than 8
        if (password.length > 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.")
        }

        // Make feedbackDiv visible
        feedbackDiv.style.display = "block";



        if (isValid) {
            // If valid, display success message
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            // If invalid, display error messages
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    })
})