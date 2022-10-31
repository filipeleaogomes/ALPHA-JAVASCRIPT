const nome = document.querySelector(".nome");
const peso = document.querySelector(".peso");
const altura = document.querySelector(".altura");
const data = document.querySelector(".data");
const genero = document.querySelector("#genero");
const button = document.querySelector("button");
let texto = document.querySelector("h1");

const validarName = /\w+\s?/;
const validarHeigth = /[0-9]+/i;
const validarWeigth = /^\d+(?:[.| ,]\d{1,2}|$)$/;

let user = new Object();

button.addEventListener("click", (e) => enviar(e));

function enviar(e) {
  e.preventDefault();
  try {
    
    validarNome(nome.value);
    validarAltura(parseInt(altura.value));
    validarPeso(parseFloat(peso.value));
    validarData(data.value);
    validarGenero(genero.value);

    texto.innerHTML = "Programa executado com sucesso!";
    console.log(user);  

  } catch (e) {
    texto.innerHTML = e;
  }
}
//---------------------------------Validações!----------------------------------------

function validarNome(value) {
  if (validarName.test(value)) {
    user.name = value;
  } else {
    throw "Insira um nome válido";
  }
}
function validarData(InsertedDate) {
  
  let oldData = new Date();
  let newInsertedDate = new Date(InsertedDate);

  if (newInsertedDate > oldData || InsertedDate == "") {
    throw "Insira uma nova data compatível.";
  } else {
    user.date = `${newInsertedDate.getUTCDate()}/${
      newInsertedDate.getUTCMonth() + 1
    }/${newInsertedDate.getUTCFullYear()}`;
  }
}
function validarPeso(value) {
  if (validarWeigth.test(value)) {
    user.weigth = value;
  } else {
    throw "Insira uma peso válido";
  }
}
function validarAltura(value) {
  if (validarHeigth.test(value)) {
    user.height = value;
  } else {
    throw "Insira uma altura válida";
  }
  console.log(value);
}

function validarGenero(value) {
  if (value !== "") {
    user.gender = value;
  } else {
    throw "Escolha um genero   ";
  }
}
