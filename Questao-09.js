/*
Questão 9: Como você pode usar uma declaração if, else if, else para 
classificar um triângulo em equilátero, isósceles ou escaleno com base em 
seus lados em JavaScript? 
*/

let lado1 = 1
let lado2 = 1
let lado3 = 2

if (lado1 == lado2 == lado3) {
    console.log("É um triângulo equilátero")
} else if 
   ((lado1 != lado2 && lado1 != lado3 && lado2 == lado3) ||
    (lado2 != lado1 && lado2 != lado3 && lado1 == lado3) ||
    (lado3 != lado1 && lado3 != lado2 && lado1 == lado2)) {
    console.log("É um triângulo isósceles")
} else {
    console.log("É um triângulo escaleno")
}