document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    mobileNav.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".mobile-nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileNav.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });
});


// Get modal elements
const modalOverlay = document.getElementById("modalOverlay");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const profile = document.getElementById("profile");

profile.addEventListener("mouseover", () => {
  modalOverlay.style.display = "flex";
});

// Function to open modal (call this when needed)
function openModal() {
  modalOverlay.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

// Function to close modal
function closeModal() {
  modalOverlay.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Event listeners
modalCloseBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", function (e) {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Close with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// To open the modal automatically (or call openModal() when needed)
// window.addEventListener('load', openModal);


 // Get all necessary elements
    const contactForm = document.querySelector('.contact-form');
    const contactModal = document.getElementById('contactModalOverlay');
    const successModal = document.getElementById('successModalOverlay');
    const confirmBtn = document.getElementById('confirmSubmit');
    const cancelBtn = document.getElementById('cancelSubmit');
    const closeSuccessBtn = document.getElementById('closeSuccessModal');

    // When contact form is submitted
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission
        
        // Show confirmation modal
        contactModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    // When user confirms submission
    confirmBtn.addEventListener('click', function() {
        // Hide confirmation modal
        contactModal.style.display = 'none';
        
        // Here you would normally submit the form
        // For demo, we'll just show success message
        // contactForm.submit(); // Uncomment to actually submit
        
        // Show success modal
        successModal.style.display = 'flex';
    });

    // When user cancels submission
    cancelBtn.addEventListener('click', function() {
        contactModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // When user closes success modal
    closeSuccessBtn.addEventListener('click', function() {
        successModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        contactForm.reset(); // Clear the form
    });

    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === contactModal) {
            contactModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === successModal) {
            successModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            contactForm.reset();
        }
    });