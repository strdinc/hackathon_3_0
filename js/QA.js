document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.QA button');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const answerClass = 'A_' + this.classList[0].split('_')[1];
      const answer = document.querySelector(`.${answerClass}`);
      const arrow = this.querySelector('img');

      // Если выбранный ответ уже открыт, просто закроем его
      if (answer.classList.contains('answer-visible')) {
        answer.classList.remove('answer-visible');
        arrow.classList.remove('rotated');
      } else {
        // Закрываем все ответы и сбрасываем поворот всех стрелок
        document.querySelectorAll('.QA .answer-visible').forEach(openAnswer => {
          openAnswer.classList.remove('answer-visible');
        });
        document.querySelectorAll('.QA img.rotated').forEach(rotatedArrow => {
          rotatedArrow.classList.remove('rotated');
        });

        // Открываем текущий ответ и поворачиваем соответствующую стрелку
        answer.classList.add('answer-visible');
        arrow.classList.add('rotated');
      }
    });
  });
});
