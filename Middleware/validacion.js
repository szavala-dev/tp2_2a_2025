function validarLibro(req, res, next) {
    const { titulo, autor } = req.body;
    if (req.method === "POST") {
      if (!titulo || !autor) {
        return res.status(400).json({ mensaje: "El título y el autor son obligatorios" });
      }
    } else if (req.method === "PUT") {
      if ((!titulo && !autor) || (titulo === "" || autor === "")) {
        return res.status(400).json({ mensaje: "Debe proporcionar al menos un título o autor para actualizar" });
      }
    }
    next();

  }
  export default validarLibro;