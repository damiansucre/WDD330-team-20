// Check if the banner has been displayed before
const bannerDisplayed = localStorage.getItem("bannerDisplayed");

// Function to display the banner/modal
function displayBanner() {
  const banner = document.getElementById("registrationBanner");
  banner.style.display = "block";

  // Set a flag to indicate that the banner has been displayed
  localStorage.setItem("bannerDisplayed", "true");
}

// Function to close the banner/modal
function closeBanner() {
  const banner = document.getElementById("registrationBanner");
  banner.style.display = "none";
}

// Event listener for the close button
const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", closeBanner);

// Show the banner if it hasn't been displayed before
if (!bannerDisplayed) {
  displayBanner();
}
