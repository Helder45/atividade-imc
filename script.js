function calcular() {

    

    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let resultado = document.getElementById("resultado");

    let alturaEmMetros = altura / 100;

    let imc = peso / (alturaEmMetros*alturaEmMetros);

    let grauImc = "";

    if(!isNaN(imc) && imc !== "") {

        if(imc < 16) {
            grauImc = "Como você ainda está vivo?\n°-°";
        } else if(imc >= 16 && imc <= 16.9) {
            grauImc = "Muito abaixo do peso.";
        } else if(imc >= 17 && imc <= 18.4) {
            grauImc = "Abaixo do peso";
        } else if(imc >= 18.5 && imc <= 24.9) {
            grauImc = "Peso normal";
        } else if(imc >= 25 && imc <= 29.9) {
            grauImc = "Acima do peso";
        } else if(imc >= 30 && imc <= 34.9) {
            grauImc = "Obesidade grau I";
        } else if(imc >= 35 && imc <= 40) {
            grauImc = "Obesidade grau II";
        } else if(imc > 40) {
            grauImc = "Obesidade grau III";
        }
    }

    resultado.innerHTML = `O seu Índice de massa corporal está em: ${imc.toFixed(2)} Kg/m²\nE a classificação de seu grau é de: ${grauImc}`;

    document.getElementById("peso").value = '';
    document.getElementById("altura").value = '';
    
}

