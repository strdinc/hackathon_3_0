let isToggled = false; // Следим за состоянием

function toggleColorAndEnableSubmit(button) {
  // Изменение цвета кнопки
  if (!isToggled) {
    button.style.backgroundColor = "#15E9C3";
    document.getElementById("subbut").disabled = false;
    document.getElementById("subbut").style.cursor = "pointer";
    document.getElementById("subbut").style.backgroundColor = "#15E9C347"; // Цвет активной кнопки
  } else {
    button.style.backgroundColor = "#1E1E1E";
    document.getElementById("subbut").disabled = true;
    document.getElementById("subbut").style.cursor = "not-allowed";
    document.getElementById("subbut").style.backgroundColor = "#15E9C347"; // Цвет заблокированной кнопки
  }
  isToggled = !isToggled; // Переключаем состояние
}
