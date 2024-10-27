function toggleColorAndEnableSubmit(button) {
  // Изменение цвета кнопки
  if (button.style.backgroundColor === "rgb(21, 233, 195)") {
    button.style.backgroundColor = "transparent";
    document.getElementById("subbut").disabled = true;
  } else {
    button.style.backgroundColor = "#15E9C3";
    document.getElementById("subbut").disabled = false;
    document.getElementById("subbut").style.cursor = "pointer";
  }
}
