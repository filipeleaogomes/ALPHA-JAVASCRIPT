const first_value = document.querySelector("#first");
const second_value = document.querySelector("#second");
const first_string = document.querySelector("#first_string");
const second_string = document.querySelector("#second_string");

result.addEventListener("click", (e) => calc_value(e));
comparative.addEventListener("click", (e) => string_length(e));


function calc_value(e) {
    e.preventDefault();
    
    let value1 = parseFloat(first_value.value) ;
    let value2 = parseFloat(second_value.value) ;
   

    if (value1 > value2) {
        document.querySelector("h1").innerHTML = "Primeiro valor é maior!";  
    } else if (value1 < value2) {
        document.querySelector("h1").innerHTML = "Segundo valor é maior!";
    } else if (value1 == value2) {
        document.querySelector("h1").innerHTML = "Valores são iguais!";
    } else {
        document.querySelector("h1").innerHTML = "error";  
    }
}

function string_length(e) {
    e.preventDefault();

    let string1 = first_string.value;
    let string2 = second_string.value;

    console.log(string1.length, string2.length);

    if (string1 == 0 || string2 == 0) {
        document.querySelector("#string").innerHTML = "Invalido";
    }else{
        
    if(string1.length > string2.length) {
        document.querySelector("#string").innerHTML = "O primeiro texto é maior que o segundo!";
} else if(string1.length < string2.length){
        document.querySelector("#string").innerHTML = "O segundo texto é maior que o primeiro!";
} else if(string1.length == string2.length){
        document.querySelector("#string").innerHTML = "Os textos possuem o mesmo tamanho!";
}
    }
  
}