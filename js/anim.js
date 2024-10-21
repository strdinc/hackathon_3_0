window.addEventListener('scroll', function() {
  const windowHeight = window.innerHeight;
  const scrollPosition = window.pageYOffset;

  const animY = document.querySelectorAll('.scroll-anim-y');
  const animX = document.querySelectorAll('.scroll-anim-x');

  animY.forEach(function(anim) {
    const animTop = anim.getBoundingClientRect().top;

    if (animTop < windowHeight / 2) {
      const speed = 0.2;
      const translateY = (scrollPosition - anim.offsetTop + windowHeight / 2) * speed;
      anim.style.transform = `translateY(${translateY}px)`;
    }
  });

  animX.forEach(function(anim) {
    const animTop = anim.getBoundingClientRect().top;

    if (animTop < windowHeight / 2) {
      const speed = 0.12;
      const translateX = (scrollPosition - anim.offsetTop + windowHeight / 2) * speed;
      anim.style.transform = `translateX(${translateX}px)`;
    }
  });
});

window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset;
  const anim = document.querySelectorAll('.scroll-anim-y-cross');

  anim.forEach(function(anim) {
    const speed = 0.2;
    anim.style.transform = `translateY(${scrollPosition*speed}px)`;
  });
});

