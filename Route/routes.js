app.get("/libros", (req, res) => {
    res.json(libros);
  });
  
  app.post("/libros", validarLibro, (req, res) => {
    const { titulo, autor } = req.body;
    const nuevoLibro = { id: nextId++, titulo, autor };
    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
  });
  
  app.get("/libros/:id", (req, res) => {
    const libro = libros.find(l => l.id === parseInt(req.params.id));
    if (!libro) return res.status(404).json({ mensaje: "Libro no encontrado" });
    res.json(libro);
  });
  
  app.put("/libros/:id", validarLibro, (req, res) => {
    const libro = libros.find(l => l.id === parseInt(req.params.id));
    if (!libro) return res.status(404).json({ mensaje: "Libro no encontrado" });
    const { titulo, autor } = req.body;
    if (titulo) libro.titulo = titulo;
    if (autor) libro.autor = autor;
    res.json(libro);
  });
  
  app.delete("./libros/:id", (req, res) => {
    const index = libros.findIndex(l => l.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ mensaje: "Libro no encontrado" });
    libros.splice(index, 1);
    res.status(204).end();
  });
  
 
  