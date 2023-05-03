/*
Crea una función que reciba 2 parámetros, precio e iva, 
y devuelva el precio con iva incluido. 
Si no recibe el iva, aplicará el 21 por ciento por defecto.
*/


function precioIva (precio,iva ){
    return precio*iva;
}

console.log(precioIva(2,1.21));

/*
Crea una función que reciba un texto y lo devuelva al revés
*/


function cadenaReverse (cadena){
    let palabraReves = "";
    for(let i=cadena.length-1; i>=0; i-- ){
        palabraReves+= cadena[i];
    }
    return palabraReves;
}

console.log(cadenaReverse('Miguel'));


/*

Crea una función que genere número entero aleatorio 
entre min y max, que serán pasados como parámetros. 
Por defecto min = 1 y max = 100
*/

function numeroAleatorio(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numeroAleatorio(10, 60));



/*
Completar las condiciones de los if 
del siguiente script para que los mensajes 
se muestren siempre de forma correcta: 
*/

let numero1 = 9;
let numero2 = 12;
 
if(numero1<numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(numero2>0) {
  console.log("numero2 es positivo");
}
if(numero1<0) {
  console.log("numero1 es negativo o distinto de cero");
}
if(numero1+1<numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

/*
Prepara un programa usando los dias que tiene cada mes (suponiendo que se trata de un año no bisiesto), 
y pida a la persona usuaria que indique un mes determinado (1 = enero y 12 = 
diciembre) y muestre, en pantalla, el número de días que tiene el mes indicado.
Deberá mostrar un mensaje como "El mes 3 tiene 31 días"
*/

let fecha = prompt("Introduce un mes [1-12]");

while (fecha >=1 || fecha <=12){
  mes= parseInt(fecha);
  if (mes === 1) {
    console.log("Enero tiene 31 días");
  }else if (mes===2) {
    console.log("Enero tiene 28 días");
  }else if (mes===3) {
    console.log("Marzo tiene 31 días");
  }else if (mes===4) {
    console.log("Abril tiene 30 días");
  }else if (mes===5) {
    console.log("Mayo tiene 31 días");
  }else if (mes===6) {
    console.log("Junio tiene 30 días");
  }else if (mes===7) {
    console.log("Julio tiene 31 días");
  }else if (mes===8) {
    console.log("Agosto tiene 31 días");
  }else if (mes===9) {
    console.log("Septiembre tiene 30 días");
  }else if (mes===10) {
    console.log("Octubre tiene 31 días");
  }else if (mes===11) {
    console.log("Noviembre tiene 30 días");
  }else if (mes===12) {
    console.log("Diciembre tiene 31 días");
  }
  fecha = prompt("Introduce un mes [1-12]");


/*
Crea un programa que pida cuatro números al usuario y  muestre en pantalla tanto la media como los datos introducidos.
*/

let contador = 0;
let suma=0;

numero = parseInt(prompt("Introduce un número"));
while (contador<=3) {
  contador ++;
  suma+=numero;
  console.log(numero);
  numero = parseInt(prompt("Introduce un número"));
}
console.log("La media es " + (suma/contador));
