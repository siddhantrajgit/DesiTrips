// ===============================
// CONTACT FORM VALIDATION
// ===============================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Input Fields
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const destination = document.getElementById("destination");
    const message = document.getElementById("message");

    // Error Fields
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const destinationError = document.getElementById("destinationError");
    const messageError = document.getElementById("messageError");

    // Clear Previous Errors
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    destinationError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    // ===============================
    // Name Validation
    // ===============================

    if (name.value.trim() === "") {

        nameError.textContent = "Please enter your name.";

        isValid = false;

    }

    // ===============================
    // Email Validation
    // ===============================

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        emailError.textContent = "Please enter your email.";

        isValid = false;

    }

    else if (!emailPattern.test(email.value)) {

        emailError.textContent = "Enter a valid email address.";

        isValid = false;

    }

    // ===============================
    // Phone Validation
    // ===============================

    const phonePattern = /^[0-9]{10}$/;

    if (phone.value.trim() === "") {

        phoneError.textContent = "Please enter your phone number.";

        isValid = false;

    }

    else if (!phonePattern.test(phone.value)) {

        phoneError.textContent =
            "Phone number must contain exactly 10 digits.";

        isValid = false;

    }

    // ===============================
    // Destination Validation
    // ===============================

    if (destination.value === "") {

        destinationError.textContent =
            "Please select a destination.";

        isValid = false;

    }

    // ===============================
    // Message Validation
    // ===============================

    if (message.value.trim() === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;

    }

    // ===============================
    // Success
    // ===============================

    if (isValid) {

        alert("✅ Form Submitted Successfully!");

        form.reset();

    }

});