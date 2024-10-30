document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.QA button');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const answerClass = 'A_' + this.classList[0].split('_')[1];
      const answer = document.querySelector(`.${answerClass}`);
      const arrowClass = 'Q_' + this.classList[0].split('_')[1] + '_arrow';
      const arrow = document.querySelector(`.${arrowClass}`);

      // Toggle visibility and rotation for the selected answer and arrow
      if (answer.classList.contains('answer-visible')) {
        answer.classList.remove('answer-visible');
        arrow.classList.remove('rotated');
      } else {
        // Close all answers and reset arrow rotations
        document.querySelectorAll('.QA .answer-visible').forEach(openAnswer => {
          openAnswer.classList.remove('answer-visible');
        });
        document.querySelectorAll('.QA img.rotated').forEach(rotatedArrow => {
          rotatedArrow.classList.remove('rotated');
        });

        // Open the current answer and rotate the corresponding arrow
        answer.classList.add('answer-visible');
        arrow.classList.add('rotated');
      }
    });
  });
});
