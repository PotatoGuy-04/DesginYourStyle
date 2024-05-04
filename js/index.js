
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slider img");
    const navLinks = document.querySelectorAll(".slider-nav a");
   
    
    // On click command
    
    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior of the link
        const targetSlideId = this.getAttribute("href").substring(1); // Extract the target slide id
        const targetSlide = document.getElementById(targetSlideId);
        targetSlide.scrollIntoView({ behavior: 'smooth',block: 'nearest', inline: 'start'});
      });
    });
   
    // Automatically switch to the next slide every 3 seconds
    
    // // const currentIndex = 0;
    // // const nextSlideIndex = 0;
    // function slideNext() {
    //   const slider = document.querySelector(".slider");
    //   const slides = slider.querySelectorAll("img");
    //   currentIndex++;
    //   //if (currentIndex === 3) { currentIndex = 0;}
    //   const nextSlide = slides[currentIndex];
    //   const sliderRect = slider.getBoundingClientRect();
    //   const nextSlideRect = nextSlide.getBoundingClientRect();
    //   const x = nextSlideRect.left - sliderRect.left;
    //   const y = window.pageYOffset + nextSlideRect.top - sliderRect.top;
    //   slider.scroll({ left: x, top: y, behavior: "smooth" });
    // }
    setInterval(slideNext, 1000);
  });