const input = document.querySelector("input");
let cepValue = "";
let cepLength = "";
let section = "";
let formartarcep;
let position;

let texto = document.querySelector("h1");

input.addEventListener("input", (e) => inserir(e));

function inserir(e) {
  position = e.target.selectionStart;

  cepValue = input.value.replace(/[^0-9]/, "");
  cepLength = cepValue.length;

  section = cepValue.slice(0, 5) + "-";

  const cepFinal = document.querySelector("#parte2");

  if (cepLength < 6) {
    cepFinal.value = cepValue;

  } else if (cepLength >= 6 && cepLength < 9) {
    formartarcep = section + cepValue.slice(5);
    cepFinal.value = formartarcep;
  }

  if (e.inputType == "deleteContentBackward") {
    e.target.selectionEnd = position;
  }
}
