const frase = document.querySelector("#calculo");

result.addEventListener("click", (e) => calc_imc(e));


function calc_imc(e){
    e.preventDefault();
    
    let valor = (document.querySelector("#first").value);    

    if(isNaN(valor) || valor == '' ){
        frase.innerHTML = "Insira um valor válido.";
    } else {
        frase.innerHTML = "O  maior número inteiro menor do que o valor inserido é : " + Math.floor(parseFloat(valor)) + "<br> O menor número inteiro maior do que o valor inserido é : " +
         Math.ceil(parseFloat(valor));

    }


}   