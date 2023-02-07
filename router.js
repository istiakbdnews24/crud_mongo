const router = require("express").Router();

const { signup, signIn } = require("./Controllers/userController");

const { getTodos, createTodos, updateTodos, deleteTodos } = require("./Controllers/todoController");


router.post("/create", createTodos);
router.get("/get", getTodos);
router.put("/:id", updateTodos);
router.delete("/:id", deleteTodos);


router.post("/signup", signup);
router.post('/signin', signIn);


module.exports = router;
