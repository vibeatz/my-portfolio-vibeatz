// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        this.textContent = "☀️ Light Mode";
    } else {
        this.textContent = "🌙 Dark Mode";
    }
});

// Time-Based Greeting Function
function displayGreeting() {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    
    // Display greeting
    const greetingContainer = document.getElementById('greeting-container');
    greetingContainer.textContent = greeting;
}

// Form Validation (Contact Form)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            alert("Please fill all fields!");
        } else {
            alert("Message sent successfully!");
            this.reset();
        }
    });
}

// Survey Form Validation
const surveyForm = document.getElementById("surveyForm");
if (surveyForm) {
    surveyForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for your feedback!");
        this.reset();
    });
}

// Display greeting when page loads
window.addEventListener('load', displayGreeting);