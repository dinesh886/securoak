// Wait for the DOM content to load before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading for 1.8 seconds
    setTimeout(function() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 1800); // Simulating loading
  });
  