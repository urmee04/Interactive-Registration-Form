### Lab-5.2: Interactive User Registration Form

This lab is an interactive user registration form built using HTML, CSS, and JavaScript. It demonstrates DOM manipulation, event handling, form validation, and localStorage through an interactive user registration form with real-time input feedback.

---

#### Objectives

This lab covers the bellow mentioned areas:

- Structure an HTML form with input fields for registration.

- Implement real-time input validation using input event listeners.

- Use HTML5 validation attributes (e.g., required, type, minlength, pattern).

- Display custom error messages dynamically next to each input field.

- Handle the submit event and prevent default form behavior.

- Save and retrieve the username using localStorage.

#### Project Setup

Create a new project folder named interactive-registration-form, and inside it:

```
interactive-registration-form/
│
├── index.html
├── styles.css
└── script.js
```

#### Tech Stack

- HTML5 – Page structure and forms

- CSS3 – Visual styling and layout

- JavaScript (ES6) – App logic and interactivity

- Local Storage API – Persistent data storage

### How to Use

- Clone or download this [repository](https://github.com/urmee04/Interactive-Registration-Form.git)

- Open the index.html file in your browser.

- Fill in the required fields: username, email, password, and confirm password.

- Click the Register button. A success message will appear:
  "Account created successfully!"

- The entered username will be automatically saved and restored using your browser’s localStorage.

---

##### Reflection questions

**1. How did event.preventDefault() help in handling form submission?**

Normally, when a form is submitted, the browser sends the to the server and refreshes the page.`event.preventDefault()` stops this defaut behavior, allowing us to handle the submission. By preventing the default submission, we can first validate all form fields (username, email, password, confirm password) before proceeding. The code checks each field's validity with functions like `validateUsername()`, `validateEmail()`, etc. and only if all validation pass `(isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid)`, the code process the form data. Otherwise, the form won't submit and users see error messages. After successfull validation, the code creates a `formData` object, logs it to console, shows a success alert and resets the form without a page refresh.

Without `event.preventDefault()`, the form would submit immediately regardless of validation results, potentially sending invalid data to the server and causing a page refresh that would disrupt the user experience.

**2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?**

1. HTML5 validation attributes

- built directly into browsers with no JS needed
- provides instant visual feedback
- simple to implement with just markup

In my HTML form, I used several HTML5 vaidation attributes like `required`, `type='email'`, `minlength='4'`

2. JavaScript-Based Validation:

- More control over validation logic and error messages
- Ability to implement complex validation rules
- Real-time feedback without form submission

In my code, I am using HTML5 attributes as a basic layer of validation, while the JS provides:

- More specific error messages
- Real-time validation during typing
- Password matching functionality that HTML5 can't do alone
- Persisting and Retrieving the Username

The `novalidate` attribute on the form tells the browser to skip its native validation since JS is handling the validation, though I could also choose to use both in parallel.

**3. Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?**

In code, I used `localstorage` to provide a better user experience by remembering the username accross page reloads.

1. Storing the Username

Persistence is handled within the `submit` event listener. When the form is successfully validated and submitted the following line of code is executed

`js localStorage.setItem("username", formData.username);`

- localStorage.setItem(key, value): This method saves data in the browser.

- We use the key "username" to identify the data.

- The value being stored is formData.username, which is the username the user entered into the form. This action ensures that after a successful registration, the username is saved for future use.

2. Retrieving the Username
   Retrieval happens immediately when the script first loads, even before the rest of the page is fully parsed:

`js let userName = JSON.parse(localStorage.getItem("username")) || "";`

- localStorage.getItem("username"): This method retrieves the string value that was saved under the key "username".

- JSON.parse(...): This function converts the string data retrieved from localStorage back into its original format. Although the username is a simple string, using parse is a good practice for consistency, especially when dealing with complex objects.

- || "": This is a fallback mechanism. If getItem("username") finds no previously saved data, it returns null. The OR (||) operator then provides a default value of an empty string ("") to the userName variable, preventing potential errors.

**_Limitations of localStorage for Sensitive Data_**
Storing sensitive data like passwords, session tokens, or personal information in localStorage is highly insecure and should be avoided. The username is generally considered non-sensitive, but it's crucial to understand the risks for other data.

- No Encryption: localStorage stores data as plain text. Anyone with physical access to the computer can open the browser's developer tools and easily view or modify anything stored in localStorage.

- Vulnerability to Cross-Site Scripting (XSS): This is the most significant risk. If an attacker can inject a malicious script into the webpage (an XSS attack), that script runs with the same permissions as your own JavaScript code. This means the attacker's script has full access to read, modify, or steal any data stored in localStorage, sending it to their own servers without the user's knowledge.

**4. Describe a challenge you faced in implementing the real-time validation and how you solved it.**

One challenge I faced while implementing real-time validation was ensuring that the error messages were correctly displayed and cleared at the right time. Initially, I noticed that even after fixing an input mistake, the error message would sometimes still appear or not update immediately.

After debugging, I realized that I wasn't consistently clearing the error messages once the input became valid. To solve this, I made sure that each validation function first checks the condition, displays an appropriate error message if invalid, and clears the message if the input is corrected.

For example, in the `validateEmail()` function, I used a regular expression to validate the email format and updated the `textContent` of the associated error span accordingly. I applied the same pattern to all fields. This made the real-time feedback much smoother and user-friendly.

I also added `input` event listeners to each field so that validation would trigger as the user typed, rather than only on form submission. This improved the responsiveness of the form and aligned with best practices for user experience.

**5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?**

To ensure custom error messages were user-friendly and displayed at the appropriate times, I implemented real-time validation using input event listeners on each form field. This allowed the form to provide immediate feedback as the user typed, which improves usability and helps catch errors early.

For example:

- I checked the length of the username and displayed a clear, specific message like "Username must be at least 4 characters".

- I used a regular expression to validate the email format and showed "Please enter a valid email address" if the input didn't match.

- For passwords, I ensured a minimum length requirement and showed "Please enter valid password" to guide the user.

- For password confirmation, I checked for an exact match and displayed "Passwords do not match" when they differed.

- I also made sure to clear the error messages immediately once the user corrected the input. This was done by setting `errorElement.textContent = ""` when the validation passed.

Additionally, I prevented form submission unless all validations were successful, ensuring errors were shown during submission if any fields remained invalid. This two-step validation (real-time + on-submit) ensured that users were guided in a supportive and non-intrusive way throughout the form interaction.

#### Resources used

- localStorage:

[localStorage.getItem()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)

[localStorage.setItem()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)

[JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

- DOMContentLoaded Event:

[DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)

- Event Listeners:

[addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

[Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

- Form Validation:

[HTMLInputElement (for value, trim())](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)

[String.prototype.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)

[Regular Expressions (RegEx)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

- DOM Manipulation:

[textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

[getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

- Form Submission:

[HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement)

[submit event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)

- Toggle Password Visibility:

[Toggle Password](https://www.javascripttutorial.net/javascript-dom/javascript-toggle-password-visibility/)
