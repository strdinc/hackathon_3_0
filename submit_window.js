function sendForm(event) {
  event.preventDefault(); // Отменяем стандартное действие отправки формы
  const formData = new FormData(document.getElementById('applicationForm'));

  fetch('submit.php', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.text())
    .then(response => {
      // Скрываем кнопку отправки и показываем сообщение об успехе
      document.getElementById('subbut').style.display = 'none';
      document.getElementById('successMessage').style.display = 'block';
    })
    .catch(error => console.error('Ошибка:', error));
}
