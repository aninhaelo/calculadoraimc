function calcularIMC() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    if (peso && altura) {
        var imc = peso / (altura * altura);
        var resultado = "Seu IMC é: " + imc.toFixed(2);

        if (imc < 18.5) {
            resultado += " (Abaixo do peso)";
        } else if (imc >= 18.5 && imc < 24.9) {
            resultado += " (Peso normal)";
        } else if (imc >= 25 && imc < 29.9) {
            resultado += " (Sobrepeso)";
        } else {
            resultado += " (Obesidade)";
        }

        document.getElementById('resultado').innerText = resultado;
    } else {
        document.getElementById('resultado').innerText = "Por favor, preencha todos os campos.";
    }
}