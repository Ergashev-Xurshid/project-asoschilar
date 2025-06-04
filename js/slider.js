// Minimal slider implementation without external dependencies
document.addEventListener('DOMContentLoaded', function() {
  // Simple slider functionality
  const sliderContainer = document.querySelector('.portfolio-cards');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  if (sliderContainer && prevBtn && nextBtn) {
    let slideIndex = 0;
    const slides = sliderContainer.querySelectorAll('.portfolio-card');
    const totalSlides = slides.length;
    const visibleSlides = window.innerWidth < 768 ? 1 : 3;
    
    // Hide all slides initially except the first few
    function updateSlides() {
      slides.forEach((slide, index) => {
        if (index >= slideIndex && index < slideIndex + visibleSlides) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }
    
    // Initialize
    updateSlides();
    
    // Event listeners
    prevBtn.addEventListener('click', function() {
      slideIndex = Math.max(0, slideIndex - 1);
      updateSlides();
    });
    
    nextBtn.addEventListener('click', function() {
      slideIndex = Math.min(totalSlides - visibleSlides, slideIndex + 1);
      updateSlides();
    });
    
    // Update on resize
    window.addEventListener('resize', function() {
      const newVisibleSlides = window.innerWidth < 768 ? 1 : 3;
      if (newVisibleSlides !== visibleSlides) {
        visibleSlides = newVisibleSlides;
        slideIndex = 0;
        updateSlides();
      }
    });
  }
});