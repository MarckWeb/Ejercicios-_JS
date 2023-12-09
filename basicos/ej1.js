//1-. Desarrolla una función que cuente el número de caracteres de una cadena de texto. funcion("algoritmos") devolverá 10.
const contarCadena = (cadena) =>
    (!cadena)
        ? console.warn('No ingresaste niguna cadena')
        : console.log(`la cadena "${cadena}" tiene "${cadena.length}" caracteres`);

//contarCadena();
//contarCadena('algoritmos')

// 2-. Desarrolla una función que te devuelva el texto recortado según el número de caracteres indicados. funcion("algortimos", 4) devolverá "algo".
const cortarCadena = (chain, longitud) =>
    (!chain)
        ? console.warn('No ingresate la cadena')
        : (longitud === undefined)
            ? console.warn('No ingresate la longitud')
            : console.info(`${chain.slice(0, longitud)}`)

//cortarCadena('algortimos')
//cortarCadena()
//cortarCadena('algortimos', 4)
//cortarCadena('', 5)


// 3-. Desarrolla una función que dada una String te devuelva un Array de textos separados por cierto caracter, Funcion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const mostrar = (chain, separardor) =>
    (!chain)
        ? console.warn('ingresa uan cadena')
        : (separardor === undefined)
            ? console.warn('ingresa el separador')
            : (chain !== Number)
                ? console.log(chain.toString().split(separardor))
                : console.info(chain.split(separardor))

// mostrar('enero febrero marzo', " ")
// mostrar()
// mostrar('hola mundo')
// mostrar('hello-word', "-")

// 4-. Desarrolla una función que repita un texto X veces, Funcion('ejemplo', 3) devolverá ejemplo ejemplo ejemplo.

const repetirCadena = (cadena, veces) => {
    if (!cadena) return console.warn('No ingresate la cadena');

    if (veces === undefined) return console.warn('ingresa el numero de veces a repetir');

    if (veces === 0 || Math.sign(veces) === -1) return console.warn(`no puedo repetir ${veces} veces`)

    for (i = 1; i < veces; i++) console.log(`${cadena}, ${i}`)
}

// repetirCadena()
// repetirCadena('ejemplo')
// repetirCadena('ejemplo', 4)
// repetirCadena('example', 0)
// repetirCadena('ex', -3)

// 5-. Desarrolla una función que invierta las palabras de una cadena de texto, Funcion("Hola Mundo") devolverá "odnuM aloH".

const revertirCadena = (cadena) =>
    (!cadena)
        ? console.warn('Ingresa la cadena')
        : console.info(`el reverso de "${cadena}" es igual a ${cadena.split('').reverse().join('')}`)
//revertirCadena(prompt('ingresa una cadena de texto: '))


// 6-. Desarrolla una función para contar el número de veces que se repite una palabra en un texto largo, Funcion("hola mundo adios mundo", "mundo") devolverá 2.

const buscarCadena = function (cadena = '', palabra = '') {
    if (!cadena) return console.warn('ingresa la cadena')

    if (!palabra) return console.log('ingresa la palabra a buscar')

    let i = 0;
    contador = 0;
    while (i !== -1) {
        i = cadena.indexOf(palabra, i)
        if (i !== -1) {
            i++;
            contador++
        }
    }
    return console.info(`la palabra "${palabra}" se repite ${contador} veces`)
}

//buscarCadena('hola mundo adios mundo chao mundo', 'mundo')

// 7-. Desarrolla una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = function (cadena) {
    if (!cadena) return console.warn('No haz ingresado la cadena de texto')
    //para que no omita mayus y minus
    cadena = cadena.toLowerCase()
    //conversion del texto
    let stgReves = cadena.split('').reverse().join('')

    if (cadena === stgReves) {
        console.info(`Si es palindromo la palabra original ${cadena} con la palabra reves ${stgReves}`)
    } else {
        console.info(`No es palindromo la palabra original ${cadena} con la palabra reves ${stgReves}`)
    }
    return
}

// palindromo()
// palindromo('salas')
// palindromo('hola')

// 8-. Desarrolla una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const deleteText = (cadena, reemplazo) =>
    (!cadena)
        ? console.warn('No ingresaste un texto')
        : (!reemplazo)
            ? console.warn('no ingresaste un patron de caracteres')
            : console.info(cadena.replace(new RegExp(reemplazo, 'ig'), ''));

// deleteText();
// deleteText("xyz1, xyz2, xyz3, xyz4 y xyz5")
// deleteText("xyz1, xyz2, xyz3, xyz4 y xyz5", 'xyz')


//9-. Desarrolla una función que obtenga un numero aleatorio entre 501 y 600.

const aleatori = () => console.info(Math.floor(Math.random() * 100) + 500)
// el *100 indica que en un rango de 100 y el 500 apartir de 500 para arriba hasta 100
//aleatori()


// 10-. Desarrolla una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), Funcion(2002) devolverá true.

const capicua = (numero) => {
    if (!numero) return console.warn('No ingresaste un numero')
    if (isNaN(numero)) return console.warn(`el valor ${numero} no es un numero`)

    let revesNum = numero.toString().split('').reverse().join('')
    revesNum = Number(revesNum)
    if (numero === revesNum) {
        console.info(`Si, es capicua el original ${numero} y al reves ${revesNum}`)
    } else {
        console.info(`No, es capicua el original ${numero} y al reves ${revesNum}`)
    }

}

// capicua()//No ingresaste un numero
// capicua('hola mundpo')//el valor hola mundpo no es un numero
// capicua(1254)//No, es capicua el original 1254 y al reves 4521
// capicua(2002)//Si, es capicua el original 2002 y al reves 2002


// 11-. Desarrolla una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), Funcion(5) devolverá 120.
let veces = 5
let fact = 1
for (i = 1; i <= veces; i++) {
    fact = fact * i
}

// console.log(fact)

const factorial = (numeroAAsignar) => {
    if (!numeroAAsignar) return console.info('ingresa un numero')
    if (isNaN(numeroAAsignar)) return console.warn(`No puedes sacar el factorial de ${numeroAAsignar}`)
    if (Math.sign(numeroAAsignar) === -1) return console.error('El numero no puede ser negativo')
    let factor = 1
    for (i = 1; i <= numeroAAsignar; i++) {
        factor *= i
    }
    return console.info(`el factorial de ${numeroAAsignar} es ${factor}`)
}

// factorial()
// factorial('hola')
// factorial(-5)
// factorial(10)


// 12-. Desarrolla una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, Funcion(7) devolverá true.

const numDivisible = (numero) => {
    if (!numero) return console.warn('No ingresaste un numero')

    if (isNaN(numero)) return console.warn('no es un numero')

    if (Math.sign(numero) === -1) return console.warn('numeros negativos no tienen divisible')

    if (numero === 0) return console.info('el 0 no es divisible con nada')

    let divisible = false;

    for (i = 2; i < numero; i++) {
        if ((numero % i) === 0) {
            divisible = true;
            break;
        }
    }
    return (divisible)
        ? console.info(`El numero ${numero}, No es primo`)
        : console.info(`el numero ${numero}, Si es primo`)
}

// numDivisible()
// numDivisible(0)
// numDivisible(-1)
// numDivisible('hola')
// numDivisible(5)
// numDivisible(4)






// 13-. Desarrolla una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const numeros = (numero) => {
    if (!numero) return console.warn('No ingresaste un numero')

    if (typeof numero !== 'number') return console.warn('no es un numero')

    return ((numero % 2) === 0)
        ? console.info(`El numero ${numero}, es PAR`)
        : console.info(`El numero ${numero}, es IMPAR`)
}

// numeros()
// numeros('hola')
// numeros(8)
// numeros(17)

// 14-. Desarrolla una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertirGrados = (grados, unidad) => {
    if (!grados) return console.warn('No ingresaste grados a convertir')

    if (isNaN(grados)) return console.error(`El valor "${grados}" ingresado NO es un numero`)

    if (!unidad) return console.warn('no ingresaste el tipo de grados a convertir')

    if (typeof unidad !== 'string') return console.error(`El valor "${unidad}" ingresado NO es un texto`)

    if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn('Valor de unidad no reconocido')

    if (unidad === 'C') {
        return console.info(`${grados}ºC = ${(Math.round((grados * 9 / 5)) + 32)}ºF`)
    } else if (unidad === 'F') {
        return console.info(`${grados}ºF = ${Math.round((grados - 32) * (5 / 9))}ºC`)
    }

    console.info('funcionaaa')
}

// convertirGrados()
// convertirGrados('s')
// convertirGrados(2)
// convertirGrados(2, false)
// convertirGrados(2, 'jola')
// convertirGrados(2, 'E')
// convertirGrados(0, 'F')
// convertirGrados(100, 'C')
// convertirGrados(32, 'F')

