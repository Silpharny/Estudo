import express from "express"
import { createUser, deleteUser, getUser } from "./controller/userController.js"

const router = express.Router()

router.post("/register", createUser)
router.get("/user", getUser)
router.delete("/delete", deleteUser)

export default router
