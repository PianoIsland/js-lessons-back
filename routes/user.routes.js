const Router = require("express")
const router = new Router()
const userController = require("../controller/user.controller")
router.post("/todos", userController.createUser)
router.get("/todos", userController.getUsers)
router.get("/todos/:id", userController.getOneUser)
router.put("/todos/:id", userController.updateUser)
router.delete("/todos/:id", userController.deleteUser)
router.delete("/todos", userController.DeleteALLUsers)
module.exports = router