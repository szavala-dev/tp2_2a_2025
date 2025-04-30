// import process from 'node:process';
// console.log(`🚀 ~ process:`, process)
import { stdin, stdout, cwd, exit } from "node:process";
import saludar from "./saludar.js";
import path from "path";
import fs from "fs/promises";
saludar();

stdout.write("🚀 ~");

// 1. **`pwd`**: Muestra el directorio actual.
// 2. **`date`**: Muestra la fecha y hora actual.
// 3. **`ls`**: Muestra la lista de archivos y carpetas en el directorio actual.
//    - Opcionalmente, soporta la opción `-l` para mostrar detalles adicionales (por ejemplo, si es un archivo o directorio).
// 4. **`cat <archivo>`**: Muestra el contenido de un archivo especificado.
// 5. **`echo <texto>`**: Muestra el texto especificado en la pantalla.
// 6. **`touch <nombre_archivo>`**: Crea un nuevo archivo vacío con el nombre especificado.

stdin.on("data", async (data) => {
  try {
    const input = data.toString().trim();
    const [command, ...args] = input.split(" ");
    console.log(command);
    switch (command) {
      case "pwd":
        stdout.write(`${cwd()}\n`);
        break;
      case "date":
        stdout.write(`${new Date().toISOString()}\n`);
        break;
      case "cat":
        if (!args[0]) {
          stdout.write("❌ Debes indicar un archivo. Uso: cat <archivo.txt>\n");
          break;
        }
        try {
          let filePath = path.resolve(cwd(), args.join(" "));
          let content = await fs.readFile(filePath, "utf-8");
          stdout.write(`${content}\n`);
        } catch (error) {
          stdout.write("archivo no existe");
        }
        break;
      case "echo":
        if (!args[0]) {
          stdout.write("❌ Debes indicar un texto. Uso: echo <archivo>\n");
          break;
        }
        stdout.write(`${args}\n`);
        break;

      case "touch":
        if (!args[0]) {
          stdout.write(
            "❌ Debes indicar un archivo a crear. Uso: touch <archivo>\n"
          );
          break;
        }
        let filePathTouch = path.resolve(cwd(), args.join(" "));
        let result = await fs.writeFile(filePathTouch, "");
        break;
      case "ls":
        try {
          let filePathDir = path.resolve(cwd());
          let resultDir = await fs.readdir(filePathDir, {
            withFileTypes: true,
          });
          resultDir.forEach((data) => {
            if (args && args[0] === "-l") {
              stdout.write(
                `${data.name}  ${
                  data.isDirectory() ? "es un directorio" : "es un archivo"
                }\n `
              );
            } else {
              stdout.write(data.name + " ");
            }
          });
        } catch (error) {
          stdout.write("Directorio no existe");
        }
        break;
      case "exit":
        stdout.write("Chau \n");
        exit();
      default:
        stdout.write(`❌ Comando desconocido: ${command}\n`);
        stdout.write(
          "Comandos disponibles: pwd, date, ls, cat, echo, touch, exit\n"
        );
        break;
    }

    stdout.write("🚀 ~");
  } catch (error) {
    console.error(error.message);
  }
});
