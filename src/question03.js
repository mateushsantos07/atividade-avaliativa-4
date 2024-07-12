import leia from "readline-sync"

var tempOrigem = leia.keyInSelect([" Celsius ", " Fahrenheit", " Kelvin "]) + 1
var temperatura = leia.questionFloat("QUANTOS GRAUS VC QUER CONVERTER: ")
var tempQuerer = leia.keyInSelect([" Celsius ", " Fahrenheit", " Kelvin "]) + 1
var TempUnMedEsc;

if(tempOrigem === 1 && tempQuerer === 2){
    TempUnMedEsc = (temperatura * 1.8) + 32
} else if(tempOrigem === 1 && tempQuerer === 3){
    TempUnMedEsc = temperatura + 273.15
} else if(tempOrigem === 2 && tempQuerer === 1){
    TempUnMedEsc = (temperatura - 32) * (5/9)
} else if(tempOrigem === 2 && tempQuerer === 3){
    TempUnMedEsc = (temperatura - 32) * (5/9) + 273.15 
} else if(tempOrigem === 3 && tempQuerer === 1){
    TempUnMedEsc = temperatura - 273.15
} else if(tempOrigem === 3 && tempQuerer === 2){
    TempUnMedEsc = (temperatura - 273.15) * 1.8 + 32
} 

console.log(TempUnMedEsc)