// Definir variáveis
const lunch = 17;
const pass = 4.50;
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
var valeria = {
  name: "Valéria",
  bank: "Nubank",
  paymentMethod: "PIX",
  accountName: "email@email"
};

var john = {
  name: "John",
  bank: "Nubank",
  paymentMethod: "PIX",
  accountName: "email@email"
};

var leticia = {
  name: "Letícia",
  bank: "Nubank",
  paymentMethod: "PIX",
  accountName: "email@email"
};

let worker = window.prompt('Qual o funcionário?');

function worker(){
  if(worker === "valeria"){
    let worker = valeria;
  } else if (worker === "john");{
    let worker = john;
  } else if (worker === 'leticia');{
    let worker = leticia;
  } else {
    document.write('não há um funcionário com esse nome na empresa')
  }
  
};

console.log(worker);

// Impressão na tela
function totalResult(){
  document.writeln(`<strong>TOTAL AJUDA DE CUSTO</strong><br>`);
  document.writeln('--------------------------------------------<br>');
  document.writeln(`Dias trabalhados no escritório: <strong>${days}</strong><br>`);
  document.writeln(`Valor gasto em almoço: <strong>${daysLunchFormatted}</strong><br>`);
  document.writeln(`Valor gasto em passagem: <strong>${daysPassFormatted}</strong><br>`);
  document.writeln('--------------------------------------------<br>');
  document.writeln(`nome do funcionário: <strong>${worker.name}</strong><br>`);
  document.writeln(`bank: <strong>${worker.bank}</strong><br>`);
  document.writeln(`Método de pagamento: <strong>${worker.paymentMethod}</strong><br>`);
  document.writeln(`Número da conta: <strong>${worker.accountName}</strong><br>`);
  document.writeln('--------------------------------------------<br>');
  document.writeln(`Dias trabalhados no escritório: <strong>${days}</strong><br>`);
  document.writeln(`Total: <strong>${resultFormatted}</strong><br>`);
}

console.log(totalResult);

