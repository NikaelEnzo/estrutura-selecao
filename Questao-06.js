/*
Questão 6: Como você pode usar uma declaração if, else if, else para 
determinar a estação do ano com base no mês em JavaScript? 
*/

let mes = 81;

if (mes == 1 || mes == 2 || mes == 3) {
    console.log("É Verão")
} else if (mes == 4 || mes == 5 || mes == 6) {
    console.log("É Outono")
} else if (mes == 7 || mes == 8 || mes == 9) {
    console.log("É Inverno")
} else if (mes == 10 || mes == 11 || mes == 12) {
    console.log("É Primavera")
} else {
    console.log("Esse mês não existe")
}