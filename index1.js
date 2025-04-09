// funciones

// function saludar() {
//      console.log("Hola mundo");
// }
// saludar()

function xParams(...params) {
  console.log(params);
}
// xParams("Hola mundo", "Hola mundo 2", "Hola mundo 3", "Hola mundo 4", "Hola mundo 5");

function defaultParams(a = 0, b = 0) {
  //   console.log(a + b);
  return a + b;
}

// defaultParams(2, 3);
// defaultParams(2); // NaN

const nombre = function (nombre) {
  return nombre;
};
// console.log(`🚀 ~ nombre ~ nombre:`, nombre("Juan"))

const defaultParams2 = defaultParams();
// console.log(`🚀 ~ defaultParams2:`, defaultParams2)

// arrow functions
// const saludar=() => {
//      // console.log("Hola mundo");
//      return "hola"
// }
// console.log(`🚀 ~ saludar ~ saludar:`, saludar())

// const saludar = nombre => {
//   // console.log("Hola mundo");
//   return `hola ${nombre}`;
// };
// console.log(`🚀 ~ saludar ~ saludar:`, saludar("lolo"));

const saludar = (nombre) => `hola ${nombre}`;

//    console.log(`🚀 ~ saludar ~ saludar:`, saludar("lolo"));

let numero = 10;
function cambiarNumero(num) {
  num = 20;
  return num;
}
// console.log(`🚀 ~ cambiarNumero ~ cambiarNumero:`, cambiarNumero(numero));
// console.log(`🚀 ~ numero:`, numero)

const dato = { nombre: "Juan", edad: 20 };

// console.log(`🚀 ~ dato:`, dato)
function cambiarData(data) {
  data.nombre = "Pedro";
  return data;
}
// console.log(`🚀 ~ cambiarData ~ cambiarData:`, cambiarData(dato))
// console.log(`🚀 ~ dato:`, dato)

let n1 = 20;
let n2 = n1;
n2 = 40;
// console.log(`🚀 ~ n1:`, n1)
// console.log(`🚀 ~ n2:`, n2)

const data1 = {
  nombre: "Pedlo",
  edad: 20,
  apellido: "Lopez",
  estudios: {
    primaria: true,
    secundaria: true,
    prepa: false,
  },
  date: new Date(),
};
// const data2= data1
// data2.nombre="Juan"
// console.log(`🚀 ~ data1:`, data1)

// copia superficial del objeto
// const data3 = { ...data1 };
// data3.nombre = "Juan";
// data3.estudios.prepa = true;
// console.log(`🚀 ~ data3:`, data3);
// console.log(`🚀 ~ data1:`, data1);

// copia superficial del array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2=arr
// arr2[0]=100
// console.log(`🚀 ~ arr:`, arr )

// const arr3=[...arr]
// arr3[0]=100
// console.log(`🚀 ~ arr:`, arr)

// copias profundas
// const data4=JSON.stringify(data1)
// console.log(`🚀 ~ data4:`, data4)
// const data5=JSON.parse(data4)
// const data5 = JSON.parse(JSON.stringify(data1));
// data5.nombre="Ricky"
// data5.estudios.prepa=true
// console.log(`🚀 ~ data5:`, data5)
// console.log(`🚀 ~ data1:`, data1)

// const data6 = structuredClone(data1);
// data6.nombre = "Ricky";
// data6.estudios.prepa = true;
// console.log(`🚀 ~ data6:`, data6);
// console.log(`🚀 ~ data1:`, data1)

// callback

function calcular(a = 0, b = 0, operacion) {
  return operacion(a, b);
}

function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}

// console.log(`🚀 ~ calcular ~ calcular:`, calcular(10, 5, sumar));
// console.log(`🚀 ~ calcular ~ calcular:`, calcular(10, 5, restar));
// console.log(`🚀 ~ calcular ~ calcular:`, calcular(10, 5, multiplicar));
// console.log(
//   `🚀 ~ calcular ~ calcular:`,
//   calcular(10, 5, function (a, b) {
//     return a / b;
//   })
// );

// console.log(
//   `🚀 ~ calcular ~ calcular:`,
//   calcular(10, 3, (a, b) =>a % b)
// );

// funciones clusure

// function crearContador() {
//   let contador = 0;
//   return function () {
//     contador++;
//     return contador;
//   };
// }
function crearContador(reset = false) {
  let contador = 0;
  return function () {
    if (reset) {
      return (contador = 0);
    }
    return ++contador;
  };
}
// const contador1 = crearContador();
// console.log(`🚀 ~ contador1:`, contador1())
// console.log(`🚀 ~ contador1:`, contador1())
// console.log(`🚀 ~ contador1:`, contador1())

// const contador2 = crearContador(true);
// console.log(`🚀 ~ contador2:`, contador2())

// condicionales
// if  else

const edad = 20;
// if (edad> 18 ) {
//     console.log("Eres mayor de edad");
// }if (edad < 18) {
//     console.log("Eres menor de edad");
// }else if (edad === 18) {
//     console.log("Tenes 18º");
// }

function esMayorDeEdad(edad) {
  //   if (edad >= 18) return "Eres mayor de edad";
  //   if (edad < 18) console.log("Eres menor de edad");
  return edad >= 18 && "Eres mayor de edad";
  //   return edad >= 18 || "Eres mayor de edad";
  //   if (edad < 18) console.log("Eres menor de edad");
}

// console.log(`🚀 ~ esMayorDeEdad:`, esMayorDeEdad(20));
// console.log(`🚀 ~ esMayorDeEdad:`, esMayorDeEdad(17));
// // esMayorDeEdad(17);

// bucles

// for

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [];
// function sumar(a) {
// a + 3;
// }

// const sumar2 = (a) => a + 2;
// function sumarArray(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     //    console.log(arr1[i]);
//     //   arr2.push(arr1[i] +2);
//     arr2.push(callback(arr1[i]));
//   }
//   console.log(`🚀 ~ arr2:`, arr2);
// }

// sumarArray(arr1, sumar2);

// map
const arr3 = arr1.map((item, indice, array) => {
     // console.log(`🚀 ~ arr3 ~ indice:`, indice)
     // console.log(`🚀 ~ arr3 ~ array:`, array)
  return item + 2;
});
console.log(`🚀 ~ arr3:`, arr3);
