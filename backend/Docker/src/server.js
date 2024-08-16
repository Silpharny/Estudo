import express from "express"
import Sequelize from "sequelize"
import config from "./config/database.js"
import User from "./models/User.js"
import userRouter from "./routes.js"

const app = express()
app.use(express.json())

const sequelize = new Sequelize(config)
User.init(sequelize)

app.use("/users", userRouter)

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.")
    app.listen(3000, () => {
      console.log("Server ON")
    })
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error)
  })
