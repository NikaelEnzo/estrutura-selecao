let mes = 7

if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
    console.log("Este mês tem 31 dias.");
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    console.log("Este mês tem 30 dias.")
} else if (mes === 2 ) {
    console.log("Este mês tem 28 ou 29 dias.")
} else {
    console.log("Este mês não existe!")
}