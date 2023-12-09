//1-. convertir grados Cº a Fº
function convertCtoF(celsius) {
   if (typeof celsius !== 'number') return console.error('el valor debe ser numerico')
   let fahrenheit = (celsius * 9 / 5) + 32;
   return fahrenheit;
}
const resultado = convertCtoF(0);
//console.log(resultado)

//2-. Invertir la cadena proporcionada y devolver la cadena invertida. Por ejemplo, "hello" debe convertirse "olleh".

function reverseString(str) {
   //si str no esta declarado
   if (!str) return console.error('ingresa una cadena de texto')
   //si str es de tipo numero
   if (typeof str === 'number') str = str.toString()

   // let reverseString = ''
   // for (let i = str.length - 1; i >= 0; i--) {
   //    reverseString += str[i]
   // }
   str = [...str].reverse().join('')
   return str;
}

let resultReverse = reverseString(12345);
//console.log(resultReverse)

/* 3-. Devuelve el factorial del entero proporcionado.
Si el número entero es representado con la letra n, un factorial es el producto de todos los enteros positivos menores o iguales a n.
Los factoriales suelen representarse con la abreviatura n!
Por ejemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120
Sólo se proporcionarán a la función los enteros mayores o iguales a cero.*/

function factorialize(num) {
   if (typeof num !== 'number') return console.warn('debes ingresar un numero')
   let fact = 1
   for (i = 1; i <= num; i++) {
      fact = fact * i
   }
   num = fact
   return num
}

const resultFactorialize = factorialize(0);
//console.log(resultFactorialize)

//4-. Devuelve la longitud de la palabra más larga en la oración proporcionada. Tu respuesta debe ser un número.

function findLongestWordLength(str) {
   if (typeof str === 'number') return console.info('ingresa un texto enves de numeros')
   let converterArray = str.split(' ')
   let reducir = converterArray.reduce((acc, valorActual) => {
      return Math.max(acc, valorActual.length)
   }, 0)
   console.log(reducir)
   let strLarge = 0
   for (i = 0; i < converterArray.length; i++) {
      if (converterArray[i].length > strLarge) {
         strLarge = converterArray[i].length
      }
   }
   return strLarge;
}
//findLongestWordLength(12233)
//findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))


function nose(max = 1, palabra = 'hola mundo entero ls') {
   let array = palabra.split(' ')
   var maxLength = array.reduce((max, elemento) => {
      console.log(max)
      console.log(elemento)
      return Math.max(max, elemento.length);
   }, 0);

   console.log(maxLength)
}

nose()