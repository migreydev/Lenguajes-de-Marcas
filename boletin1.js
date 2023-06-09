/*
1	- Solicita	un	nombre,	la	edad	y	muestra	por	consola	el	mensaje	
"Hola	 ____,	 tienes	 ____	 años	 y	 el	 año	 que	 viene	 tendrás	 ____	
años"
Realiza	el	ejercicio	con	prompt(mensaje)	y	haz	uso	de	los	template	
strings.
*/

let nombre = prompt('Introduce tu nombre');
let edad = prompt('Introduce tu edad')

console.log(`Hola ${nombre}, tienes ${edad}, y el año que viene tendre ${++edad}`);

/*
2	- Escribe	un	programa	que	pueda	calcular	el	área	de	3	 figuras	
geométricas,	 triángulo,	 rectángulo	 y	 círculo.	 En	 primer	 lugar	
pregunta	de	qué	figura	se	quiere	calcular	el	área,	después	solicita	
los	datos	que	necesites	para	calcularlo.
				triángulo	=	b	*	h/2
				rectángulo	=	b	*	h
				círculo	=	π	*	r2	(pi	*	radio	al	cuadrado)

*/

let figura = prompt('¿De qué figura se quiere calcular el área? [triangulo, rectangulo, circulo]')

if (figura.toLowerCase() === 'triangulo') {
  let b = prompt('Introduce el valor de la base');
  let h = prompt('Introduce el valor de la altura');
  let area = b * h / 2;
  console.log(`El área del triángulo es: ${area}`);
} else if (figura.toLowerCase() === 'rectangulo') {
  let b = prompt('Introduce el valor de la base');
  let h = prompt('Introduce el valor de la altura');
  let area = b * h;
  console.log(`El área del rectángulo es: ${area}`);
} else if (figura.toLowerCase() === 'circulo') {
  let r = prompt('Introduce el valor del radio');
  let pi = 3.1416;
  let area = pi * r * r;
  console.log(`El área del círculo es: ${area}`);
} else {
  console.log('Figura no valida');
}



/*

3	 - Solicita	 un	 número	 e	 imprime	 todos	 los	 números	 pares	 e	
impares	desde	1	hasta	ese	número	con	el	mensaje	"es	par"	o	"es	
impar"
				si	el	número	es	5	el	resultado	será:
								1	- es	impar
								2	- es	par
								3	- es	impar
								4	- es	par
								5	- es	impar

*/

let contador=0;
let numero = prompt('Introduce un número');

for (let i = 1; i <= numero; i++) {
  if (i % 2 == 0) {
    console.log(`${i} es par`);
  } else {
    console.log(`${i} es impar`);
  }
}


/*
4	- Escribe	un	programa	que	pida	un	número	entero	mayor	que	1	
y	que	escriba	si	el	número	es	primo	o	no.
				Un	número	primo	es	aquel	que	solo	es	divisible	por	sí	mismo	y	
la	unidad
*/



let numero = prompt('Introduce un número entero mayor a 1');
let i=0;

while (numero > i) {
    if(numero%i == 0) {
        console.log(`${numero} es primo`);
    } else {
        console.log(`${numero<} no es primo`);
    }
    i++;
    numero = prompt('Introduce un número entero mayor a 1');
}


/*
5	- Escriba	un	programa	que	pida	un	número	entero	mayor	que	
cero	y	calcule	su	factorial.
				El	 factorial	es	el	 resultado	 de	multiplicar	ese	 número	 por	 sus	
anteriores	hasta	la	unidad.
				!5	=	5*4*3*2*1	=	120
                */


let numero = prompt ("Introduce un numero mayor que 0");
let i = numero;
                
while (i > 0) {
    --i;
    numero *= i
    console.log(`${numero}`);    
}


/*
6	- Escribe	un	programa	que	permita	ir	introduciendo	una	 serie	
indeterminada de	 números	 mientras	 su	 suma	 no	 supere	 50.	
Cuando	 esto	 ocurra,	 se	 debe	 mostrar	 el	 total	 acumulado	 y	 el	
contador	de	cuantos	números	se	han	introducido
*/

let suma = 0;
let limite = 50;
let contadorNumeros=0;

while(suma < limite) 
    {numero = prompt ("Introduce un número");
    ++contadorNumeros;
    suma+= parseInt(numero);
}
console.log(`Se ha acumulado ${suma} y el número de numeros introducidos ha sido de ${contadorNumeros}`); 

/*
7	- Crea	 3	arrays.	El	primero	tendrá 5	números	y	el	 segundo	 se	
llamará	pares	y	el	tercero	impares,	ambos	estarán	vacíos.	Después	
multiplica	 cada	 uno	 de	 los	 números	 del	 primer	 array	 por	 un	
número	aleatorio	entre	1	y	10,	si	el	resultado	es	par	guarda	ese	
número	en	el	array	de	pares	y	si	es	impar	en	el	array	de	impares.	
Muestra	por	consola:
				-la	multiplicación	que	se	produce	junto	con	su	resultado	con	el	
formato	2	x	3	=	6
				-el	array	de	pares	e	impares*/

                
let numeros = [1,2,3,4,5];
let pares = [];
let impares = [];


    
for(let numero of numeros) {
    let numeroAleatorio =Math.floor(Math.random() * 10) + 1;
    let resultado= numero * numeroAleatorio;

    if(resultado%2===0){
        pares.push(resultado);
    }else {
        impares.push(resultado);
    }
}
console.log(`Números pares: ${pares}`); 
console.log(`Números impares: ${impares}`);



/*
8	- Dado	un	array	de	letras,	solicita	un	número	de	DNI	y	calcula	
que	 letra	 le	 corresponde.	 El	 número	 no	 puede	 ser	 negativo	 ni	
tener	más	de	8	dígitos.	La	posición	de	la	letra	es	el	resultado	del	
módulo	del	número	introducido	entre	23.
const	letras	=	['T',	'R',	'W',	'A',	'G',	'M',	'Y',	'F',	'P',	'D',	'X',	'B',	'N',	'J',	
'Z',	'S',	'Q',	'V',	'H',	'L',	'C',	'K',	'E',	'T'];
*/


const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = prompt("Introduce tu dni");

    if(dni.length < 8 || dni.length>8) {
        console.log(`Error, el dni tiene menos de 8 digitos o más de 8 digitos`);
    }else {
        let letra=letras[dni%23];
        console.log(`Letra del dni: ${letra}`); 
    }


/*
9	 - Solicitar	 al	 usuario	 una	 palabra	 y	 mostrar	 por	 consola	 el	
número	de	consonantes,	vocales	y	longitud	de	la	palabra.
*/


let palabra = prompt("Introduce una palabra");
let consonantes = 'bcdfghjklmnñpqrstvwyz';
let vocales = 'aeiou';
let contarVocales = 0;
let contarConsonantes = 0;

for (let i = 0; i < palabra.length; i++) {
  let letra = palabra[i];
  if (consonantes.includes(letra)) {
    contarConsonantes++;
  } else if (vocales.includes(letra)) {
    contarVocales++;
  }
}
console.log(`Número de consonantes: ${contarConsonantes}, número de vocales: ${contarVocales} y longitud de la palabra: ${palabra.length}`);



/*
10	 - Dado	 un	 array	 que	 contiene	 ["azul",	 "amarillo",	 "rojo",	
"verde",	"rosa"]	determinar	si	un	color	introducido	por	el	usuario	
a	través	de	un	prompt	se	encuentra	dentro	del	array	o	no.
*/


let respuesta = prompt ("Introduce un color que se encuentre dentro del array");
let color = ["azul",	 "amarillo",	 "rojo",	"verde",	"rosa"];

for(let i = 0; i<respuesta.length; i++) {
  if(color.includes(respuesta)) {
    console.log(`El color ${respuesta}, se encuentra dentro del array`);
  }else {
    console.log(`El color ${respuesta}, no se encuentra dentro del array`);
  }
}
