const express = require("express")

const server = express()

server.use(express.json())

// Query Params - ?nome=NodeJS
// Route Params - /curso/1
// Request Body - { "name": "NodeJS", "type": "Backend" }

server.listen(3000)

const cursos = ["NodeJS", "ReactJS", "React Native"]

// Middlewares
server.use((req, res, next) => {
  console.time("Request")
  console.log(`Método: ${req.method}; URL: ${req.url}`)
  next()
  console.timeEnd("Request")
})

function checkCurso(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Nome do curso é obrigatório" })
  }
  return next()
}

function checkIndex(req, res, next) {
  const { index } = req.params
  if (!cursos[index]) {
    return res.status(400).json({ error: "Curso inexistente" })
  }
  return next()
}

// POST - Cria uma informação no back-end
server.post("/cursos", checkCurso, (req, res) => {
  const { name } = req.body
  cursos.push(name)
  return res.json(cursos)
})

//  GET - Buscar todas informações no back-end
server.get("/cursos", (req, res) => {
  return res.json(cursos)
})

// GET - Buscar uma informação no back-end
server.get("/cursos/:index", checkIndex, (req, res) => {
  const { index } = req.params

  return res.json(cursos[index])
})

// PUT - Atualizar uma informação no back-end
server.put("/cursos/:index", (req, res) => {
  const { index } = req.params
  const { name } = req.body
  cursos[index] = name
  return res.json(cursos)
})

// DELETE - Deletar uma informação no back-end
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params
  cursos.splice(index, 1)
  return res.json(cursos)
})
