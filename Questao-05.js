/*
Questão 5: Como você pode usar uma declaração if, else if, else para verificar 
se um número é par, ímpar ou zero em JavaScript? 
*/

let numero = 0;

if (numero % 2 == 0 && numero != 0) {
    console.log("É par")
} else if (numero % 2 == 1) {
    console.log("É ímpar")
} else {
    console.log("É zero")
}