// definir variaveis

var lunch = 17;
var pass = 4.50;
var calcDayPass = pass * 2;

//definir quantidade de dias
var days = window.prompt("Quantos dias foram trabalhado no escritório");
var daysPass = pass * days;
var daysLunch =  lunch * days;

//calculo resultado
var result = (calcDayPass + lunch)*days;


//lista com os id do funcionário

funcionario = {
    nome: "valéria",
    banco: "Nubank",
    metodo_de_pagamento: "pix",
    numero_da_conta: "email@email"
}


//impressão na tela

document.writeln(`TOTAL AJUDA DE CUSTO <br>`);
document.writeln('--------------------------------------------<br>')
document.writeln(`Dias trabalhados no escritório <strong>R$ ${days}</strong><br>`)
document.writeln(`Valor em almoço gasto foi de <strong>R$ ${daysLunch}</strong><br>`);
document.writeln(`Valor em passagem gasto foi de <strong>R$ ${daysPass}</strong><br>`);

document.writeln('--------------------------------------------<br>')
document.writeln(`Dias trabalhados no escritório <strong>R$ ${days}</strong><br>`)


document.writeln(`o total é <strong>R$ ${result}</strong><br>`)