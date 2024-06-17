document.addEventListener("DOMContentLoaded", function () {
  const platano = document.querySelector("#platano");

  platano.addEventListener("click", function () {
    if (platano.style.border === "2px solid red") {
      platano.style.border = "";
    } else {
      platano.style.border = "2px solid red";
    }
  });
});
