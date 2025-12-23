/* Feature 1: Toggle Content (Displays/Hides Travel Tips) */
function toggleTips() {
    // 1. Get the content div
    var content = document.getElementById("tips-content");
    // 2. Get the button
    var btn = document.getElementById("toggle-btn");

    // 3. Check current display state
    if (content.style.display === "none") {
        content.style.display = "block"; // Show it
        btn.innerText = "Hide Tips";     // Change button text
    } else {
        content.style.display = "none";  // Hide it
        btn.innerText = "Show Tips";     // Change button text
    }
}

/* Feature 2: Simple Form Validation */
function validateForm(event) {
    // Prevent the form from actually submitting (reloading the page)
    event.preventDefault();

    // 1. Get the values from the inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var messageBox = document.getElementById("form-message");

    // 2. Check if email is empty
    if (email === "" || name === "") {
        alert("Please fill in all fields!");
        messageBox.style.color = "red";
        messageBox.innerText = "Error: All fields are required.";
        return false;
    } 
    
    // 3. Check if email contains an '@' symbol
    if (!email.includes("@")) {
        alert("Please enter a valid email address containing '@'");
        messageBox.style.color = "red";
        messageBox.innerText = "Error: Invalid email format.";
        return false;
    }

    // 4. Success message
    alert("Thank you, " + name + "! You are now subscribed.");
    messageBox.style.color = "green";
    messageBox.innerText = "Success! You have been subscribed.";
    
    // Optional: Reset the form
    document.getElementById("contactForm").reset();
}

/* Extra Helper: Smooth Scroll (Optional aesthetic addition) */
function scrollToDestinations() {
    document.getElementById("destinations").scrollIntoView({behavior: 'smooth'});
}