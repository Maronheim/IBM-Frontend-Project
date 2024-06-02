document.addEventListener("DOMContentLoaded", function() {
    const recommendationForm = document.getElementById("recommendationForm");

    // Add event listener to the form submission
    recommendationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting
        
        // Get form values
        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate form fields (optional)
        if (!message) {
            alert("Please enter a message.");
            return;
        }

        // Process form submission (send data to server, etc.)
        // For now, let's just log the values
        console.log("Name:", name);
        console.log("Message:", message);

        // Optionally, reset the form fields after submission
        recommendationForm.reset();

        // Show confirmation message (optional)
        alert("Recommendation submitted successfully!");
    });
});

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
