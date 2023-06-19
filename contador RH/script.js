// Definir variáveis
var lunch = 17;
var pass = 4.50;
var calcDayPass = pass * 2;

// Definir quantidade de dias
var days = window.prompt("Quantos dias foram trabalhados no escritório");
var daysPass = pass * days;
var daysLunch = lunch * days;

// Calcular resultado
var result = (calcDayPass + lunch) * days;

// Converter para a moeda e armazenar nas variáveis
var daysLunchFormatted = daysLunch.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
var daysPassFormatted = daysPass.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
var resultFormatted = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Lista com os dados do funcionário
var funcionario = {
  nome: "Valéria",
  banco: "Nubank",
  metodo_de_pagamento: "PIX",
  numero_da_conta: "email@email"
};

// Impressão na tela
document.writeln(`<strong>TOTAL AJUDA DE CUSTO</strong><br>`);
document.writeln('--------------------------------------------<br>');
document.writeln(`Dias trabalhados no escritório: <strong>${days}</strong><br>`);
document.writeln(`Valor gasto em almoço: <strong>${daysLunchFormatted}</strong><br>`);
document.writeln(`Valor gasto em passagem: <strong>${daysPassFormatted}</strong><br>`);
document.writeln('--------------------------------------------<br>');
document.writeln(`Nome do funcionário: <strong>${funcionario.nome}</strong><br>`);
document.writeln(`Banco: <strong>${funcionario.banco}</strong><br>`);
document.writeln(`Método de pagamento: <strong>${funcionario.metodo_de_pagamento}</strong><br>`);
document.writeln(`Número da conta: <strong>${funcionario.numero_da_conta}</strong><br>`);
document.writeln('--------------------------------------------<br>');
document.writeln(`Dias trabalhados no escritório: <strong>${days}</strong><br>`);
document.writeln(`Total: <strong>${resultFormatted}</strong><br>`);
