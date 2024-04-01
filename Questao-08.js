/*
Questão 8: Como você pode usar uma declaração if, else if, else para 
determinar se uma idade corresponde a bebê, criança, adolescente, adulto ou 
idoso em JavaScript? 
*/

let idade = 60

if (idade < 0) {
    console.log("Não nasceu ou não é uma idade")
} else if (idade >= 0 && idade <= 2) {
    console.log("É um bebê")
} else if (idade > 2 && idade < 12) {
    console.log("É uma criança")
} else if (idade >= 12 && idade < 20) {
    console.log("É um adolecente")
} else if (idade >= 20 && idade < 60) {
    console.log("É um adulto")
} else {
    console.log("É um idoso")
}