import http from "node:http";
import { obtenerTareas, crearTarea, obtenerTareaPorId, actualizarTarea, eliminarTarea } from "./tareas.js";

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const id = url.split("/")[2];g

  if (url === "/tareas" && method === "GET") {
    obtenerTareas(res);
  } else if (url === "/tareas" && method === "POST") {
    crearTarea(req, res);
  } else if (url.startsWith("/tareas/") && method === "GET") {
    obtenerTareaPorId(id, res);
  } else if (url.startsWith("/tareas/") && method === "PUT") {
    actualizarTarea(id, req, res);
  } else if (url.startsWith("/tareas/") && method === "DELETE") {
    eliminarTarea(id, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Ruta no encontrada" }));
  }
});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});