const first_value = document.querySelector("#first");
const second_value = document.querySelector("#second");

const html_injections = document.querySelector("h1");


result.addEventListener("click", (e) => calc_value(e));


function calc_value(e) {
    e.preventDefault();

    let value1 = parseFloat(first_value.value) ;
    let value2 = parseFloat(second_value.value) ;
    
    const operador= document.querySelector("#htmlOpe").value;
   
    switch (operador) {
        
        case ("somar"):
            html_injections.innerHTML ="O valor da soma é : " + (value1+value2);
            break;
        case ("subtrair"):
            html_injections.innerHTML ="O valor da subtração é : " + (value1-value2);
            break;
        case ("multiplicar"):
            html_injections.innerHTML ="O valor da multiplicação é : " + (value1*value2);
            break;
        case ("dividir"):
            html_injections.innerHTML ="O valor da divisão é : " + (value1/value2);   
            break;       
        default:
            html_injections.innerHTML = "Insira um operador válido!"
}
}