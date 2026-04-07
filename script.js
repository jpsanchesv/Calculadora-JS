function calcular() {
    let v1 = Number(document.getElementById("valor1").value);
    let v2 = Number(document.getElementById("valor2").value);
    let op = document.getElementById("operacao").value;
    let resultado;

    if (op == "soma") {
        resultado = v1 + v2;
    } else if (op == "subtracao") {
        resultado = v1 - v2;
    } else if (op == "multiplicacao") {
        resultado = v1 * v2;
    } else if (op == "divisao") {
        if (v2 == 0) {
            resultado = "Não pode dividir por zero!";
        } else {
            resultado = v1 / v2;
        }
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}