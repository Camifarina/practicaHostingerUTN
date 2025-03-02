/* let edad = prompt ('Ingresa tu edad')
let lenguaje = prompt ('Ingresa tu lenguaje favorito')

if(edad > 16 && lenguaje === 'JS'){
    console.log ('Bienvenido al desarrollo web frontend')
} else{
    console.log ('No se puede ser perfecto en todo')
} */


/* for(let i=1 ; i<=3 ; i=i+1){
    let nombre = prompt('Ingrese un nombre')
    alert('Ingresaste el nombre '+nombre)
    console.log('se ingreso: '+nombre)
} */

/* let resultado = 0
for(let i=1 ; i<=3 ; i=i+1){
    let numero = Number(prompt('Ingrese un numero'))
    resultado = resultado + numero
}
alert(resultado) */

/* let repeticiones = prompt('Escribe la cantidad de repeticiones:')
let resultado = 0

while (!repeticiones || isNaN(repeticiones)) {
    alert('No ingresaste un dato numerico')
    repeticiones = prompt('Escribe la cantidad de repeticiones:')
}
for (let i = 1; i <= repeticiones; i = i + 1) {
    let numero = prompt('Escribe un numero:')
    while (!numero || isNaN(numero)) {
        alert('No ingresaste un dato numerico')
        numero = prompt('Escribe un numero:')
    }
    resultado = resultado + Number(numero)
}
alert(resultado) */

/* let numero1 = prompt('Escribe el primer numero')
let numero2 = prompt('Escribe el segundo numero')

function sumar (num1, num2){
    console.log('El resultado es ' + (Number(num1) + Number(num2)))
}

sumar(numero1, numero2) */