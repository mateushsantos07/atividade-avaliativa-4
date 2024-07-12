import leia from "readline-sync"

for (var i = 0; i < 3; i++) {
    var nome = leia.question("JOGADOR " + (i + 1) + " : ")
    var gols = leia.questionInt("QUANTOS GOLS O JOGADOR " + (i + 1) + " FEZ ")
    var passesCertos = leia.questionInt("QUANTOS PASSES CERTOS O JOGADOR " + (i + 1) + " FEZ ")
    var passesErrados = leia.questionInt("QUANTOS PASSES ERRADOS O JOGADOR " + (i + 1) + " FEZ ")
    var melhorJogador;
    var melhorJogador1;
    var totalJogador = (gols * 50) + (passesCertos * 10) + (passesErrados * -5)

    if (totalJogador < 50) {
        console.log("PESSIMA PARTIDA")
    } else if (totalJogador > 50 && totalJogador <= 100) {
        console.log("PARTIDA RUIM")
    } else if (totalJogador > 100 && totalJogador <= 150) {
        console.log("FEZ O BASICO")
    } else if (totalJogador > 150 && totalJogador <= 200) {
        console.log("FOI BEM NA PARTIDA")
    } else if (totalJogador > 200) {
        console.log("JOGOU DEMAIS")
    }

    if (melhorJogador === undefined || totalJogador > melhorJogador) {
        melhorJogador = totalJogador;
        melhorJogador1 = nome;
    }
}
console.log(melhorJogador)
console.log(melhorJogador1)