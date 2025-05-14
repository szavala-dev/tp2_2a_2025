import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next)=>{
//      console.log(`🚀 method:${req.method}` )
//      next()
// })
// ------------
const loger = (req, res, next) => {
  console.log(`🚀 ~ loger ~ req:`, req.params)
  console.log(`🚀 method:${req.method} _ ${req.url}`);
  next();
};


app.use(loger)

app.get("/", (req, res) => {
  res.status(200).send("get all");
});

app.get("/tareas", loger, (req, res) => {
  console.log(`🚀 ~ app.get ~ req:`, req.params);
  res.status(200).send("get tareas");
});

app.get("/:id", (req, res) => {
  console.log(`🚀 ~ app.get ~ req:`, req.params.id);
  // logica
  res.status(200).send("get by id");
});

// app.use(loger)
app.post("/", (req, res) => {
  // console.log(`🚀 ~ app.post ~ req:`, req.body)
  res.status(200).send("post");
});

app.listen(8080, () => {
  console.log(`🚀 ~ app.listen ~ 8080:`, 8080);
});
