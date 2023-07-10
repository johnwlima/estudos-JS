// Enquanto o (x=1)  for igual ou menor a 10 pisca

function piscar(){ 
    var intervalo = 0;
    var contador = 0;
    while (contador < 10){
    intervalo += 300;
    setTimeout("document.getElementById('lamp').src='on.jpg'; " ,intervalo);
    intervalo += 300;
    setTimeout("document.getElementById('lamp').src='off.jpg'; " ,intervalo);
    contador++;
    }
    }

document