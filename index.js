//  const sumar=require("./sumar.js")
//  sumar(2,4)

//const {readFile} = require("./fsSincronico/fsSincronico.js");


//readFile()

const {crearDirectorio} = require("./ejercicios/ejercicios.js");  
const {crearArchivo} = require("./ejercicios/ejercicios.js");
const {leerArchivo} = require("./ejercicios/ejercicios.js");
const {agregarContenido} = require("./ejercicios/ejercicios.js");
const {listarArchivos} = require("./ejercicios/ejercicios.js");
const {eliminarArchivo} = require("./ejercicios/ejercicios.js");
const { gestionarSistema } = require("./ejercicios/ejercicios.js");

const ejercicios = async () => {
  const carpeta = "archivos";
  const archivo = `${carpeta}/nota.txt`;

  await crearDirectorio(carpeta);
  await crearArchivo(archivo, "Este es un archivo inicial.");
  await leerArchivo(archivo);
  await agregarContenido(archivo, "Línea agregada desde el sistema.");
  await leerArchivo(archivo);
  await listarArchivos(carpeta);
  await eliminarArchivo(archivo);
  await listarArchivos(carpeta);  

};

// Ejecutar la función
ejercicios();
gestionarSistema();