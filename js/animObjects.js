document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.float-complex');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');  // Добавляем класс для включения анимации
      } else {
        entry.target.classList.remove('animate'); // Убираем класс, если элемент вышел из видимости
      }
    });
  });

  elements.forEach(element => {
    observer.observe(element);
  });
});
