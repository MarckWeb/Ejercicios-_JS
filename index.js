//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (numero, base) => {
    if(numero === undefined) return console.warn('No ingresaste un numero a convertir');

    if(typeof numero !== 'number') return console.error(`El valor "${numero}" NO es un numero`);

    if(base === undefined) return console.warn('No ingresaste la base')

    if(typeof base !== 'number') return console.error(`El valor "${base}", NO es un numero`)

    if(base === 2){
        //paseInt =metodo que combierte de binario a decimal
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`)
    }
}

// convertirBinarioDecimal()
//  convertirBinarioDecimal(100, 2)





// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const montoFinal = (monto, descuento) => {
    if(monto === undefined) return console.warn('El monto no puede ser 0')
    if(typeof monto !== 'number') return console.log(`El valor ${monto} NO es un numero`)

    if(monto === 0) return console.warn('El monto no puede ser 0')

    if(Math.sign(monto) === -1) return console.error('el monto no puede ser negativo')

    if(descuento === undefined) return console.warn('El monto no puede ser 0')

    if(typeof descuento !== 'number') return console.log(`El valor ${descuento} NO es un numero`)

    if(descuento === 0) return console.warn('El monto no puede ser 0')

    if(Math.sign(descuento) === -1) return console.error('el monto no puede ser negativo')

    return console.info(`${monto} - ${descuento}% = ${(monto - (monto * descuento)/100)}`)
}

// montoFinal()
// montoFinal(1000, 20)

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const calcularAnyos = (fecha) => {
    if(fecha !== 'number') return console.warn('ingresa numeros')
    if(fecha === undefined) return console.warn('No ingresaste fecha')
    if(!fecha instanceof Date) return console.error ('El valor que ingresaste no es una fecha valida')

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
        anyosEnMS = 1000 * 60 * 60 * 365,
        anyosHumanos = Math.floor(hoyMenosFecha/anyosEnMS);
    
    return (Math.sign(anyosHumanos) === -1)
        ?console.info(`Faltan ${Math.abs(anyosHumanos)} años para el ${fecha.getFullYear()}.`)
        :(Math.sign(anyosHumanos) === 1)
            ?console.info(`han pasado"${anyosHumanos}" años desde ${fecha.getFullYear()}.`)
            :console.info(`Estamos en el año actual ${fecha.getFullYear()}`)

}

calcularAnyos()
calcularAnyos(new Date(1995, 5, 5))
calcularAnyos('hla')




// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarLetras = (cadena) => {
    if(!cadena) return console.warn('No ingresaste una cadena de tetxo')

    if(typeof cadena !== 'string') return console.error(`El valor ingresado ${cadena}, No es un texto`);

    //el for of = para recorrer cualquier elementp que sea iterable, texto, array, etc.
    let vocales = 0,
        consonantes = 0
    cadena = cadena.toLocaleLowerCase();
    for (let letra of cadena) {
        if(/[aeiouAEIUO]/.test(letra)) vocales++

        if(/[bcdfghjklmnpqrstvwxyz]/.test(letra)) consonantes++; 
    }
    return console.info({
        cadena,
        vocales,
        consonantes
    })
}

// contarLetras()
// contarLetras(525522)
// contarLetras('Hola Mundo')





// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.


const validarNombre = (nombre) =>{
    if(!nombre) return console.warn('No ingresaste un nombre');

    if(typeof nombre !== 'string') return console.error(`El valor ${nombre} NO es un texto`);
    //metod test() evalua si se cumple la condicion de regExp
    let regExp = /^[A-Za-zÑñÁáÉéÓóÚú\s]+$/g.test(nombre);

    return(regExp)
        ?console.info(`"${nombre}", Es un nombre valido`)
        :console.info(`"${nombre}", NO es un nombre valido`);
}

// validarNombre()
// validarNombre(5522)
// validarNombre('askdhbejncla as')
// validarNombre("Jokin Barba")


// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.


const validarEmail = (email) => {
    if(!email) return console.warn('No ingresate un email')
    if(typeof email !== 'string') return console.error(`El valor ${email}, NO es una texto valido`)
    
    ///^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return(expReg)
        ?console.info(`"${email}", Es un correo valido`)
        :console.info(`"${email}", Es un correo valido`)
}

// validarEmail()
// validarEmail(485214)
// validarEmail('hill')
// validarEmail('hola_98@skks.com')

