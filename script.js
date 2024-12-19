// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
// Fade-in effect when scrolling into "About Me" section
const aboutSection = document.querySelector('#about');
window.addEventListener('scroll', () => {
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    aboutSection.classList.add('visible');
  }
});

// Add a CSS class for visibility
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate inputs
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }
    
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // If validation passes, simulate sending the message
    alert('Message sent successfully!');
    document.getElementById('contact-form').reset();
  });
  
  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
 // Add an event listener to the form
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
  
    // Display the success message
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
  
    // Clear the form fields
    this.reset();
  
    // Optionally, auto-hide the success message after a few seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000); // Message disappears after 5 seconds
  });
  