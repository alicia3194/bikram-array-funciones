// 1.- Crear variable de nombre **arrayVacio** cuyo valor sea **un array vacío**
const arrayVacio = [];

// 2.- Crear variable de nombre **arrayNumeros** declarada con un **array de números del 0 al 9 (0, 1, 2...)**
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 3.- Crear variable de nombre **arrayNumerosPares** declarada con un **array con los números pares del 0 al 9** (considerando al 0 par)
const arrayNumerosPares = [0, 2, 4, 6, 8];

// 4.- Crear variable de nombre **arrayBidimensional** declarada con valor **array [[0, 1, 2], ['a', 'b', 'c']]**
const arrayBidimensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];

// 5.- Crea la función **suma** que acepte como argumento **dos números** y devuelva **el resultado de su suma**
function suma(a, b) {
  return a + b;
}

// 6.- Crea la función **potenciacion** que acepte como argumento **dos números** y devuelva **el resultado de elevar el primero(a) al segundo(b) (a^b)**
function potenciacion(a, b) {
  return a ** b;
}
// 7.- Crea la función **separarPalabras** que acepte como argumento **un string** y devuelva **un array de palabras 'hola mundo' => [hola, mundo]**

function separarPalabras(string) {
  const palabras = string.split(" ");
  return palabras;
}
console.log(palabras("Hola mundo"));

// 8.- Crea la función **repetirString** que acepte como argumento **un string y un número** y devuelva
//**un string que sea el resultado de concatenar el primer string el número dado de veces**

// 9.- Crea la función **esPrimo** que acepte como argumento
//**un número** y devuelva ****true si es primo y false si no lo es****

function esPrimo(num) {
  if (num % 2 === 0) return false;
  else if (num % 2 !== 0) return true;
}

// 10.-  Crear la función **ordenarArray** que acepta como argumento **un array de números** y devuelva un **array ordenado de menor a mayor**
let result = [];
function ordenarArray(arrayNum) {
  for (let i = 0; i < arrayNum.length; i++) {
    result.push(arayNum[i].sort);
    return result;
  }
}
console.log(ordenarArray(result));

// 11.- Crear la función **obtenerPares** que acepta como argumento **un array de números** y devuelva un **array con los elementos pares**
let numerosPares = [];
function obtenerPares(num) {
  for (let i = 0; (i = num.length); i++) {
    if (num % 2 === 0) {
      numerosPares.push(num[i]);
    }
  }
}
// 12.- Crear la función **pintarArray** que acepte como argumento **un array** y devuelva **una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'**
let arrayPalabras = [0, 1, 2];

function pintarArray(numeros) {
  return numeros.toString();
}

// 13.- Crear la función **arrayMapi** que acepte como argumento **un Array y una función**
// y devuelva **un array en el que se haya aplicado la función a cada elemento del array**

function arrayMapi(params) {}

// 14.- Crear la función **eliminarDuplicados** que acepte como argumento **un array**
//y devuelva **un array en el que se hayan eliminado los duplicados**
let miArreglo = [1, 2, 3, 4, 5, 2, 3, 4];

let arregloSinRepetidos = miArreglo.reduce(function (acumulador, elemento) {
  if (acumulador.indexOf(elemento) === -1) {
    acumulador.push(elemento);
  }
  return acumulador;
}, []);

console.log(arregloSinRepetidos); // [1, 2, 3, 4, 5]

// 15.- Crear variable de nombre **arrayNumerosNeg** declarada con un **array de números del 0 al -9 (0, -1, -2...)**

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

// 16.- Crear variable de nombre **holaMundo** declarada con valor **array con las palabras 'Hola' y 'Mundo'**

const holaMundo = ["Hola", "Mundo"];

//17.- Crear variable de nombre **loGuardoTodo** declarada con valor **array con valores 'hola', 'que', 23, 42.33 y 'tal'**

const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
// - [ ] 18.- Crear variable de nombre **arrayDeArrays** declarada con valor **array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]**

const arrayDearrays = [
  [756, "nombre"],
  [225, "apellido"],
  [298, "direccion"],
];

// 19.- Crea la función **multiplicacion** que acepte como argumento **dos números** y devuelva **el resultado de su multiplicación**

function multiplicacion(a, b) {
  return a * b;
}

// 20.- Crea la función **division** que acepte como argumento **dos números** y devuelva **el resultado de su division**
function division(a, b) {
  return a / b;
}

//21.- Crea la función **esPar** que acepte como argumento **un número** y devuelva **true si es par y false si es impar**

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else return false;
}

// 22.- Crea el array **arrayFunciones** que tenga como valor **las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)**
let arrayFunciones = [
  function suma(num1, num2) {
    return num1 + num2;
  },
  function resta(num1, num2) {
    return num1 - num2;
  },
  function multiplicacion(num1, num2) {
    return num1 * num2;
  },
];

// 23.-  Crear la función **ordenarArray2** que acepta como argumento **un array de números** y devuelva un **array ordenado de mayor a menor**

// 24.- Crear la función **obtenerImpares** que acepta como argumento **un array de números** y devuelva un **array con los elementos impares**

// 25.- Crear la función **sumarArray** que acepte como argumento **un array numérico** y devuelva **la suma de los números en el array Array: [1, 2, 3] resultado: 6**

// 26.- Crear la función **multiplicarArray** que acepte como argumento **un array numérico** y devuelva **la multiplicación de los números en el array Array:  [2, 3, 4] resultado: 24**
