// variables
// // var nombre = "osval"
// console.log(`🚀 ~ nombre:`, nombre)
// nombre=1
// console.log(`🚀 ~ nombre:`, nombre)
// var nombre = "osvaldin"
// console.log(`🚀 ~ nombre:`, nombre)

// let apellido= "ojeda"
// console.log(`🚀 ~ apellido:`, apellido)
// apellido= 20
// console.log(`🚀 ~ apellido:`, apellido)
// // let apellido= "Ojeda"

const pi = 3.14;
// // pi="3.1416"
// console.log(`🚀 ~ pi:`, pi)

// tipos de datos
// datos primitivos
// string
let str = "string";
// console.log(`🚀 ~ str:`, typeof str);
// let str2 = "string";
// let str3 = `string ${pi}`;
// console.log(`🚀 ~ str3:`, str3);

// // number
// let num = 3;
// console.log(`🚀 ~ num:`, typeof num);

// // bigint
// let bigInt = 1234567890123456789012345678901234567890n;
// console.log(`🚀 ~ bigInt:`, typeof bigInt);

// // boolean
// let bool = true;
// console.log(`🚀 ~ bool:`, typeof bool);

// // undefined
// let undef;
// console.log(`🚀 ~ undef:`, typeof undef);

// // Symbol
// let sym = Symbol("symbol");
// console.log(`🚀 ~ sym:`, typeof sym);
// let sym2 = Symbol("symbol");
// console.log(`🚀 ~ sym2:`, typeof sym2);
// console.log(`🚀 ~ sym == sym2:`, sym === sym2);

// console.log(`🚀 `, "2" === 2);

// // null
// let nul = null;
// console.log(`🚀 ~ nul:`, typeof nul);

// // datos complejos
// // object
// // let dev="isDeveloper"
// let dev = "edad";
// const obj = {
//   nombre: "osval",
//   apellido: "ojeda",
//   edad: 20,
//   isDeveloper: true,
// };
// console.log(`🚀 ~ obj:`, obj);
// obj.nombre = "ricardo";
// console.log(`🚀 ~ obj:`, obj);
// console.log(`🚀 ~ obj:`, typeof obj);
// console.log(`🚀 ~ obj:`, obj.isDeveloper);
// // console.log(`🚀 ~ obj:`,  obj.name)
// console.log(`🚀 ~ obj:`, obj[dev]);
// // obj=""

// const arr = [1, 2, 3, 4, 5];
// console.log(`🚀 ~ arr:`, typeof arr);
// console.log(`🚀 ~ arr:`, arr[0]);

// funciones

// saludar()
function saludar(parametros) {
  console.log("Hola");
  // return "Hola";
  //   console.log("Hola");
}
// console.log(`🚀 ~ saludar ~ saludar:`, saludar())
// saludar();

// arrow functions
// console.log(`🚀 ~ sumar:`, sumar(3,2))
var sumar = (a, b) => {
  return a + b;
};
// console.log(`🚀 ~ sumar:`, sumar(1,2))

// metodos de js
// metotos de string
let str4 = "Hola Mundo";
// console.log(`🚀 ~ str4:`, str4.length)
// console.log(`🚀 ~ str4:`, str4.toUpperCase())
// console.log(`🚀 ~ str4:`, str4.split(" "))

const array = str4.split(" ");
// console.log(`🚀 ~ array:`, array)
// console.log(`🚀 ~ array:`, array)
// console.log(`🚀 ~ array:`, array.join(" "))
// console.log(`🚀 ~ array:`, array.length=0)
// console.log(`🚀 ~ array:`, array)

// operadores
// operadores aritmeticos
let a = 3;
let b = 2;
console.log(`🚀 ~ a + b:`, a + b);
a++; // incrementa a en 1 es igual a hacer a=a+1
console.log(`🚀 ~ a++;  ${a}`);

// operadores de asignacion
("="); // asigna el valor
let c = "c";
console.log(`🚀 ~ c:`, c);

// "+="; // suma y asigna
let d = 3;
d += 2; // d=d+2
console.log(`🚀 ~ d:`, d);

// operadores de comparacion

// "=="; // igual
// "==="; // igual y del mismo tipo
// "!="; // diferente
// "!=="; // diferente y del mismo tipo
console.log(`🚀 ~ c==d:`, c !== d);

const obj1 = {
  nombre: "osval",
  edad: 20,
};
const obj2 = {
  nombre: "osval",
  edad: 20,
};

// const obj2 = obj1//no

console.log(`🚀 ~ obj1===obj2:`, obj1 == obj2);

// operadores logicos
//  && // and
//  || // or
//  ! // not
console.log(`🚀 ~ && ${true && true}`);
console.log(`🚀 ~ && ${false && true}`);
console.log(`🚀 ~ || ${true ||  false}`);
console.log(`🚀 ~ !not ${!true}`);

// ternario 
// condicion ? true : false
const edad = 20;
const esMayor = edad >= 18 ? true : false;
console.log(`🚀 ~ esMayor:`, esMayor);

// nulish
// ?? nullish coalescing operator

let valor = 0;
const resultado= valor && "no hay valor";
console.log(`🚀 ~ resultado:`, resultado); 




