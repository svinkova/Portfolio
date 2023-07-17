window.addEventListener('scroll', function() {
    let menu = document.querySelector('nav');
    let logo = document.querySelector('.sticky-logo-text');
    let scrollPosition = window.scrollY;
  
    if (scrollPosition > 165) {
      menu.classList.add('sticky');
      logo.classList.add('sticky');
    } else {
      menu.classList.remove('sticky');
      logo.classList.remove('sticky');
    }
  });


  