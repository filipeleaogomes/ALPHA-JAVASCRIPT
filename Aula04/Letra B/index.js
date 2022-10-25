const frase = document.querySelector("#calculo");

result.addEventListener("click", (e) => calc_imc(e));


function calc_imc(e){
    e.preventDefault();
    
    let salario = parseFloat((document.querySelector("#first").value));
    let novo_salario = parseFloat((document.querySelector("#second").value));
    

    if(isNaN(salario) ||  isNaN(novo_salario) ){
        frase.innerHTML = "Valores Inválidos";
    } else {
           frase.innerHTML = "Seu novo salário é de : "+ (Math.floor(Math.random() * (novo_salario-salario)) + salario)+ " reais";
    }   

}