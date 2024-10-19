window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const anim = document.querySelectorAll('.scroll-anim-y');

    anim.forEach(function(anim) {
        const speed = 0.2; 
        anim.style.transform = `translateY(${scrollPosition*speed}px)`;
    });
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const anim = document.querySelectorAll('.scroll-anim-x');

    anim.forEach(function(anim) {
        const speed = 0.12; 
        anim.style.transform = `translateX(${scrollPosition*speed}px)`;
    });
});
