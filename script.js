// Load User Name from localStorage

let userName = JSON.parse(localStorage.getItem("username")) || "";

// Wait for DOM to be fully loaded

document.addEventListener("DOMContentLoaded", function () {
  // Select the registration form and input fields by their IDs
  const registrationForm = document.getElementById("registrationForm");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  // Attach real-time validation listeners to input fields
  usernameInput.addEventListener("input", validateUsername);
  emailInput.addEventListener("input", validateEmail);
  passwordInput.addEventListener("input", validatePassword);
  confirmPasswordInput.addEventListener("input", validateConfirmPassword);
  // Handle form submission
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Perform final validation on all form fields
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    // If all validation pass, process the form data
    if (
      isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      // Create a formData object with trimmed values
      const formData = {
        username: usernameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value,
      };
      // Store the username in localStorage so it can be pre-filled on page reload

      localStorage.setItem("username", formData.username);

      // Simulate form submission and
      console.log("Form submitted:", formData);
      alert("Account created successfully!");

      // Reset the form fields
      registrationForm.reset();
    }
  });
  // Validate the user name: must be at least 4 characters
  function validateUsername() {
    const username = usernameInput.value.trim();
    const errorElement = document.getElementById("usernameError");

    if (username.length < 4) {
      errorElement.textContent = "Username must be at least 4 characters";
      return false;
    }

    errorElement.textContent = ""; // Clear error if valid
    return true;
  }
  // Validate the email using regular expression pattern
  function validateEmail() {
    const email = emailInput.value.trim();
    const errorElement = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      errorElement.textContent = "Please enter a valid email address";
      return false;
    }

    errorElement.textContent = ""; // Clear error if valid
    return true;
  }
  // Validate the password: must be at least 8 characters
  function validatePassword() {
    const password = passwordInput.value;
    const errorElement = document.getElementById("passwordError");

    if (password.length < 8) {
      errorElement.textContent = "Please enter valid password";
      return false;
    }

    errorElement.textContent = ""; // Clear error if valid
    return true;
  }
  // Confirm that password and confirm password fields match
  function validateConfirmPassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const errorElement = document.getElementById("confirmPasswordError");

    if (password !== confirmPassword) {
      errorElement.textContent = "Passwords do not match";
      return false;
    }

    errorElement.textContent = ""; // Clear error if valid
    return true;
  }
});
