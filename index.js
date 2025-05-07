import http from "node:http";
// console.log(`🚀 ~ http:`, http)

const server = http.createServer((req, res) => {
  console.log(`🚀 ~ method:`, req.method);
  console.log(`🚀 ~ url:`, req.url);
  // console.log(`🚀 ~ server ~ res:`, res)

  const tareas = [];
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
    console.log(`🚀 ~ req.on ~ body:`, body);
  });
  req.on("end", () => {
    tareas.push(JSON.parse(body));

    console.log(`🚀 ~ server ~ tareas:`, tareas);
    res.end("tarea creada con exito")
  });


  // res.end("hola clase de tp2")
});
// console.log(`🚀 ~ server:`, server)
server.listen(8000, () => {
  console.log(`🚀 ~ server.listen ~ http://localhost:8000`);
});

