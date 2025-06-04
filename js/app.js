// Main JavaScript file with Swiper initialization
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
  
  // Form validation
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nameInput = document.getElementById('name');
      const phoneInput = document.getElementById('call');
      const companyInput = document.getElementById('com');
      
      let isValid = true;
      
      // Basic validation
      if (!nameInput.value.trim()) {
        markInvalid(nameInput, 'Iltimos, ismingizni kiriting');
        isValid = false;
      } else {
        markValid(nameInput);
      }
      
      if (!phoneInput.value.trim() || !phoneInput.value.match(/[0-9+\s]{9,}/)) {
        markInvalid(phoneInput, 'Iltimos, to\'g\'ri telefon raqamini kiriting');
        isValid = false;
      } else {
        markValid(phoneInput);
      }
      
      if (!companyInput.value.trim()) {
        markInvalid(companyInput, 'Iltimos, kompaniya nomini kiriting');
        isValid = false;
      } else {
        markValid(companyInput);
      }
      
      if (isValid) {
        // In a real application, you would submit the form data to the server
        alert('Rahmat! Tez orada siz bilan bog\'lanamiz.');
        contactForm.reset();
      }
    });
  }
  
  function markInvalid(element, message) {
    element.classList.add('invalid');
    
    // Create or update error message
    let errorElement = element.parentNode.querySelector('.error-message');
    if (!errorElement) {
      errorElement = document.createElement('span');
      errorElement.className = 'error-message';
      element.parentNode.appendChild(errorElement);
    }
    errorElement.textContent = message;
  }
  
  function markValid(element) {
    element.classList.remove('invalid');
    const errorElement = element.parentNode.querySelector('.error-message');
    if (errorElement) {
      errorElement.remove();
    }
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Performance monitoring
  if ('performance' in window && 'PerformanceObserver' in window) {
    // Create a performance observer
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log Core Web Vitals metrics
        console.log(`${entry.name}: ${entry.value}`);
      }
    });
    
    // Observe LCP, FID, and CLS
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
    observer.observe({ type: 'first-input', buffered: true });
    observer.observe({ type: 'layout-shift', buffered: true });
  }
});