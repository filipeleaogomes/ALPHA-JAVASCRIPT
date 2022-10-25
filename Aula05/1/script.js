let texto = document.querySelector("h1");

result.addEventListener("click", (e) => zeroToTen(e));

function zeroToTen(e) {
  e.preventDefault();

  const valor = document.querySelector("#valor").value;
  // const valor = parseFloar(document.querySelector("#valor").value);

  console.log(valor);

  switch (valor) {
    case "0":
      texto.innerText = "Zero";
      break;

    case "1":
      texto.innerText = "Um";
      break;

    case "2":
      texto.innerText = "Dois";
      break;

    case "3":
      texto.innerText = "Três";
      break;

    case "4":
      texto.innerText = "Quatro";
      break;

    case "5":
      texto.innerText = "Cinco";
      break;

    case "6":
      texto.innerText = "Seis";
      break;

    case "7":
      texto.innerText = "Sete";
      break;

    case "8":
      texto.innerText = "Oito";
      break;

    case "9":
      texto.innerText = "Nove";
      break;

    case "10":
      texto.innerText = " Dez";
      break;

    default:
      texto.innerText = "Insira uma valor válido";
  }
}
