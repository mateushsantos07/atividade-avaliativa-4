import leia from "readline-sync"

var palavra = leia.question("DIGITE UM TEXTO OU UMA PALAVRA: ")
var vogais = 0

for (var i = 0; i < palavra.length; i++) {
    if (palavra[i] === "a" || "e" || "i" || "o" || "u") {
        vogais++
    }
}   
console.log(vogais)