const frase = document.querySelector("#calculo");
result.addEventListener("click", (e) => calc_imc(e));


function calc_imc(e){
    e.preventDefault();
    
    let peso = parseFloat((document.querySelector("#first").value));
    let altura = parseFloat((document.querySelector("#second").value));
    
    let imc=(peso/(altura*altura));

    if(isNaN(peso) ||  isNaN(altura) ){
        frase.innerHTML = "Valores Inválidos";
    } else {
        if(imc < 18.5){
            frase.innerHTML = "Seu IMC é: "+imc+" e "+ "Sua classificação no rank IMC é magreza";
        }else if(imc > 18.5 && imc <=24.9){
            frase.innerHTML = "Seu IMC é: "+imc+" e "+"Sua classificação no rank IMC é normal";
        }else if(imc > 24.9 && imc < 30){
            frase.innerHTML = "Seu IMC é: "+imc+" e "+"Sua classificação no rank IMC é sobrepeso";
        } else if(imc >= 25 && imc < 39.9){
            frase.innerHTML = "Seu IMC é: "+imc+" e "+ "Sua classificação no rank IMC é obesidade";
        } else 
        frase.innerHTML = "Sua classificação no rank IMC é Obesidade grave";
    }   

}