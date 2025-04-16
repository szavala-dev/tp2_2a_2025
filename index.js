// // arrow functions
// // const sumar = (a, b) => a + b;
// const sumar = (a, b) => {
//   return a + b;
// };

// // console.log(restar(4,3))
// function restar(a, b) {
//   return a - b;
// }

// desestructuracion

const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};

const persona2 = {
  nombre: "Pedro",
  edad: 30,
  ciudad: "Madrid",
};
// console.log(`🚀 ~ persona:`, persona.nombre)
// console.log(`🚀 ~ persona:`, persona.edad)
// console.log(`🚀 ~ persona:`, persona.ciudad)

// const nombre= persona.nombre
// const edad= persona.edad
// const ciudad= persona.ciudad
// console.log(`🚀 ~ nombre:`, nombre)

const { edad, ciudad, nombre1 } = persona;
// console.log(`🚀 ~ nombre:`, nombre1);
// console.log(`🚀 ~ ciudad:`, ciudad);
// console.log(`🚀 ~ edad:`, edad);

const { nombre, edadPersona2 } = persona2;
// console.log(`🚀 ~ persona2:`, persona2);
// edadPersona2=20

// para los arrays
const numeros = [1, 2, 3, 4, 5];
const [dos, tres, uno] = numeros;
// console.log(`🚀 ~ uno:`, uno)

// --------------------------------------------------------------------

// asincronismo

function inicio() {
  console.log("inicio");
}
function fin() {
  console.log("fin");
}

function time() {
  setTimeout(() => {
    console.log("time");
  }, 0);
}

function promesa(bolean) {
  return new Promise((resove, reject) => {
    if (bolean) {
      resove("todo bien");
    } else {
      reject("todo mal");
    }
  });
}

inicio();
time();
// console.log(promesa(false))
promesa(true)
  .then((res) => {
    console.log(`🚀 ~ res:`, res);
  })
  .catch((err) => {
    console.log(`🚀 ~ err:`, err);
  })
  .finally(() => {
    console.log("promesa cumplida");
  });

fin();

// const poke = fetch("https://pokeapi.co/api/v2/pokemon/ditto");

// poke
//   .then((res) => res.json())
//   .then((data) => console.log(data.forms[0].name))
//   .catch((err) => console.log(err));

async function poke() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await res.json();
    console.log(`🚀 ~ poke ~ data:`, data.forms);
    // console.log(`🚀 ~ poke ~ res:`, res)
    // return data.forms[0].name;
  } catch (error) {
    console.log(`🚀 ~ poke ~ error:`, error);
  }finally {
    console.log("fin de la  poke api");
  }
}
// console.log(poke());
// poke().then((res) => {
//   console.log(`🚀 ~ poke ~ res:`, res);
// });

poke()
