let texto = document.querySelector("h1");
let texto2 = document.querySelector(".mes");
let texto3 = document.querySelector(".dia");

result.addEventListener("click", (e) => loaDATE(e));

function loaDATE(e) {

  e.preventDefault();

  const tempo = document.querySelector("input").value;

  let date = new Date(tempo);
  if (isNaN(date)) {
    texto.innerHTML = "Insira uma data válida!";
  } else {
    texto.innerHTML = `O dia insirido é:  ${date.getUTCDate()} <br>
                       O mês inserido é : ${date.getUTCMonth() +1} <br>
                       O ano inserido é : ${date.getUTCFullYear()} <br>`;

    switch (date.getUTCMonth()+1) {
      case 1:
        texto2.innerText = `O mês inserido é : Janeiro`;
        break;
      case 2:
        texto2.innerText = `O mês inserido é : Fevereiro`;
        break;
      case 3:
        texto2.innerText = `O mês inserido é : Março`;
        break;
      case 4:
        texto2.innerText = `O mês inserido é : Abril`;
        break;
      case 5:
        texto2.innerText = `O mês inserido é : Maio`;
        break;
      case 6:
        texto2.innerText = `O mês inserido é : Junho `;
        break;
      case 7:
        texto2.innerText = `O mês inserido é :  Julho`;
        break;
      case 8:
        texto2.innerText = `O mês inserido é : Agosto`;
        break;
      case 9:
        texto2.innerText = `O mês inserido é : Setembro`;
        break;
      case 10:
        texto2.innerText = `O mês inserido é : Outubro `;
        break;
      case 11:
        texto2.innerText = `O mês inserido é :  Novembro`;
        break;
      case 12:
        texto2.innerText = `O mês inserido é : Dezembro`;
        break;
    }
  
    switch (date.getUTCDay()) {

      case 1:
        texto3.innerHTML = `O dia inserido é : Segunda <br>
      A data inserida corresponde a : ${date.getTime()} milisegundos`;
        break;
      case 2:
        texto3.innerHTML = `O dia inserido é : Terça <br>
      A data inserida corresponde a : ${date.getTime()} milisegundos`;
        break;
      case 3:
        texto3.innerHTML = `O dia inserido é : Quarta <br>
      A data inserida corresponde a : ${date.getTime()} milisegundos`;
        break;
      case 4:
        texto3.innerHTML = `O dia inserido é : Quinta <br>
      A data inserida corresponde a : ${date.getTime()} milisegundos`;
        break;
      case 5:
        texto3.innerHTML = `O dia inserido é : Sexta <br>
      A data inserida corresponde a : ${date.getTime()} milisegundos`;
        break;
      case 6:
        texto3.innerHTML = `O dia inserido é : Sábado <br>
      A data inserida corresponde a : ${date.getTime()} milisegundos`;
        break;
      case 0:
          texto3.innerText = `O dia inserido é : Domingo 
        A data inserida corresponde a : ${date.getTime()} milisegundos`;
          break;
    }
  }
}
