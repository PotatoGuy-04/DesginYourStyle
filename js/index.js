/* slider */
  var counter = 0;
  const slides = document.querySelectorAll('.slide')

 
  slides.forEach(
    (slide, index) => {
    slide.style.left = `${index * 100}%`;
    }
  )
  const goNext = () => {
    if (counter < 2) {
      counter++;
    }
    else {
      counter = 0;
    }
    slideImage();

  }
  const goPrev = () => {
    if (counter > 0) {
      counter--;
    }
    else {
      counter = 2;
    }
    slideImage();
  }

  const goAuto = () => {
    if (counter < 2) {
      counter++;
    }
    else {
      counter = 0;
    }
    slideImage();

  }
  const slideImage = () => {
    slides.forEach(
      (slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
      }
    )
  }

  setInterval(goAuto, 5000);

/* hamburger menu */
  const hamburgerMenuCheckbox = document.querySelector('.hamburger-menu input[type="checkbox"]');
  const bootstrap2Links = document.querySelectorAll('.bootstrap2 a');

  bootstrap2Links.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerMenuCheckbox.checked = false;
    });
  });