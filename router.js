const router = require("express").Router();

const { signup } = require("./Controllers/userController");

const { authUser}  =  require("./Controllers/authController");

const { getTodos, createTodos, updateTodos, deleteTodos } = require("./Controllers/todoController");


router.get("/", (req, res) => {
  res.json({ message: "Server is running :D" });
});

router.post("/create", createTodos);
router.get("/get", getTodos);
router.put("/:id", updateTodos);
router.delete("/:id", deleteTodos);


router.post("/signup", signup);

router.post('/auth', authUser);


module.exports = router;
