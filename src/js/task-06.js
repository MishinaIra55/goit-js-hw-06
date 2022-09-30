// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  if (
    textInput.value.length === Number(textInput.getAttribute("data-length"))
  ) {
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid");
  }
});
