const router = require("express").Router();

const { getTodos, createTodos, updateTodos, deleteTodos } = require("./Controllers/Todo");

router.get("/", (req, res) => {
  res.json({ message: "Server is running :D" });
});

router.post("/create", createTodos);

router.get("/get", getTodos);

router.put("/:id", updateTodos);

router.delete("/:id", deleteTodos);

module.exports = router;
