const express = require("express")

const server = express()

server.get("/", (req, res) => {
  return res.send({
    curso: "NodeJS",
  })
})
server.listen(3000)
