const fs = require("fs/promises");
const path = require("path");

//ejercicio 1
// Crear un directorio
const crearDirectorio = async (rutaRelativa) => {
  const ruta = path.resolve(__dirname, rutaRelativa);
  try {
    await fs.mkdir(ruta, { recursive: true });
    console.log(`[✓] Directorio creado: ${ruta}`);
  } catch (error) {
    if (error.code === 'EEXIST') {
      console.log(`[!] El directorio ya existe: ${ruta}`);
    } else {
      console.error(`[X] Error al crear el directorio: ${error.message}`);
    }
  }
};

//ejercicio 2
// Crear un archivo
const crearArchivo = async (rutaRelativa, contenido = "Archivo creado con fs.promises") => {
  const ruta = path.resolve(__dirname, rutaRelativa);
  try {
    await fs.writeFile(ruta, contenido, { flag: 'wx' });
    console.log(`[✓] Archivo creado: ${ruta}`);
  } catch (error) {
    if (error.code === 'EEXIST') {
      console.log(`[!] El archivo ya existe: ${ruta}`);
    } else {
      console.error(`[X] Error al crear archivo: ${error.message}`);
    }
  }
};

//ejercicio3
// Leer un archivo
const leerArchivo = async (rutaRelativa) => {
  const ruta = path.resolve(__dirname, rutaRelativa);
  try {
    const contenido = await fs.readFile(ruta, "utf-8");
    console.log(`[✓]Contenido de ${ruta}:\n${contenido}`);
  } catch (error) {
    console.error(`[X] No se pudo leer el archivo: ${error.message}`);
  }
};

//ejercicio4
// Agregar contenido a un archivo
const agregarContenido = async (rutaRelativa, mensaje) => {
  const ruta = path.resolve(__dirname, rutaRelativa);
  try {
    await fs.appendFile(ruta, `\n${mensaje}`);
    console.log(`[✓] Contenido agregado a ${ruta}`);
  } catch (error) {
    console.error(`[X] Error al agregar contenido: ${error.message}`);
  }
};

//ejercicio5
// Listar archivos en un directorio
const listarArchivos = async (rutaRelativa) => {
  const directorio = path.resolve(__dirname, rutaRelativa);
  try {
    const archivos = await fs.readdir(directorio);
    if (archivos.length === 0) {
      console.log(`[!] El directorio está vacío.`);
    } else {
      console.log(`📂 Archivos en ${directorio}:`);
      archivos.forEach((archivo, i) => console.log(`${i + 1}. ${archivo}`));
    }
  } catch (error) {
    console.error(`[X] No se pudo leer el directorio: ${error.message}`);
  }
};

//ejercicio6
// Eliminar un archivo
const eliminarArchivo = async (rutaRelativa) => {
  const ruta = path.resolve(__dirname, rutaRelativa);
  try {
    await fs.unlink(ruta);
    console.log(`[✓] Archivo eliminado: ${ruta}`);
  } catch (error) {
    console.error(`[X] No se pudo eliminar el archivo: ${error.message}`);
  }
};

// Bonus: Integración completa
const gestionarSistema = async () => {
  const carpeta = "archivos";
  const archivo = `${carpeta}/nota.txt`;

  console.log("Iniciando gestión del sistema de archivos...\n");

  await crearDirectorio(carpeta);
  await crearArchivo(archivo, "Este es un archivo inicial.");
  await leerArchivo(archivo);
  await agregarContenido(archivo, "Línea agregada desde el sistema de gestión.");
  await leerArchivo(archivo);
  await listarArchivos(carpeta);
  await eliminarArchivo(archivo);
  await listarArchivos(carpeta);

  console.log("\n[✓] Gestión del sistema finalizada.");
};

// Exportar todas las funciones
module.exports = {
  crearDirectorio,
  crearArchivo,
  leerArchivo,
  agregarContenido,
  listarArchivos,
  eliminarArchivo,
  gestionarSistema,
};