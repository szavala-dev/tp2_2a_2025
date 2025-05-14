import { v4 as uuidv4 } from "uuid";

export let tareas = [
  {
    id: uuidv4(),
    descripcion: "Hacer la tarea",
    completada: true,
  },
  {
    id: uuidv4(),
    descripcion: "Lavar la ropa",
    completada: false,
  },
  {
    id: uuidv4(),
    descripcion: "Hacer la cena",
    completada: true,
  },
  {
    id: uuidv4(),
    descripcion: "Pasear al perro",
    completada: false,
  },
];

export function obtenerTareas(res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(tareas));
}

export function crearTarea(req, res) {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    try {
      const { descripcion } = JSON.parse(body);
      if (!descripcion || typeof descripcion !== "string") {
        res.writeHead(400);
        return res.end("Descripción inválida");
      }
      const nuevaTarea = { id: uuidv4(), descripcion, completada: false };
      tareas.push(nuevaTarea);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(nuevaTarea));
    } catch {
      res.writeHead(400);
      res.end("JSON inválido");
    }
  });
}

export function obtenerTareaPorId(id, res) {
  const tarea = tareas.find((t) => t.id === id);
  if (!tarea) {
    res.writeHead(404);
    return res.end("Tarea no encontrada");
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(tarea));
}

export function actualizarTarea(id, req, res) {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    try {
      const { completada } = JSON.parse(body);
      if (typeof completada !== "boolean") {
        res.writeHead(400);
        return res.end("Estado completada inválido");
      }
      const tarea = tareas.find((t) => t.id === id);
      if (!tarea) {
        res.writeHead(404);
        return res.end("Tarea no encontrada");
      }
      tarea.completada = completada;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(tarea));
    } catch {
      res.writeHead(400);
      res.end("JSON inválido");
    }
  });
}

export function eliminarTarea(id, res) {
  const index = tareas.findIndex((t) => t.id === id);
  if (index === -1) {
    res.writeHead(404);
    return res.end("Tarea no encontrada");
  }
  tareas.splice(index, 1);
  res.writeHead(204);
  res.end();
}