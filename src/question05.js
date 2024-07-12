/*Escreva um algoritmo para verificar se uma roleta de cassino é viciada. 
A roleta tem 37 números (de 0 a 36), 
sendo que o número 0 é verde e os demais são divididos igualmente entre vermelho e preto (impares são vermelho, pares são pretos). 
O programa deve contar quantas vezes cada cor (verde, vermelho, preto) foi 
gerada e verificar se alguma cor tem uma frequência maior que 40%. 
Se houver, o programa deve indicar que a roleta pode estar viciada.*/


function preencherVetor(tamanhoVetor, min, max) {
    var vetor = [];
    for (var i = 0; i < tamanhoVetor; i++) {
        vetor[i] = parseInt(Math.random() * (max - min)) + min
    }
    return vetor;
}
function coresViciado() {
    var jogadas = preencherVetor(100, 0, 36);

    var cores = [0, 0, 0];
    if (jogadas % 2 === 0) {
        cores[1]++
    } else if (jogadas % 2 !== 0) {
        cores[2]++
    } else if (jogadas === 0) {
        cores[0]++
    }

    for (var i = 0; i < jogadas.length; i++) {
        cores[jogadas[i]]++;
    }

    for (var i = 1; i < cores.length; i++) {
        cores[i] = 100 / jogadas.length * cores[i];
    }

    for (var i = 1; i < cores.length; i++) {
        if (cores[i] > 22) {
            console.log("COR VICIADO!!!!")
        }
    }
    console.table(cores)
}
coresViciado()
