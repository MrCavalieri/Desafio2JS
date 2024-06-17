document.addEventListener("DOMContentLoaded", function () {
  const digit1 = document.getElementById("digit1");
  const digit2 = document.getElementById("digit2");
  const digit3 = document.getElementById("digit3");
  const ingresarButton = document.getElementById("ingresar");
  const resultMessage = document.getElementById("resultMessage");

  for (let i = 1; i <= 9; i++) {
    const option1 = document.createElement("option");
    option1.value = i;
    option1.textContent = i;
    digit1.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = i;
    option2.textContent = i;
    digit2.appendChild(option2);

    const option3 = document.createElement("option");
    option3.value = i;
    option3.textContent = i;
    digit3.appendChild(option3);
  }

  ingresarButton.addEventListener("click", function () {
    const password = `${digit1.value}${digit2.value}${digit3.value}`;

    if (password === "911") {
      resultMessage.textContent = "password 1 correcto";
    } else if (password === "714") {
      resultMessage.textContent = "password 2 correcto";
    } else {
      resultMessage.textContent = "password incorrecto";
    }
  });
});
