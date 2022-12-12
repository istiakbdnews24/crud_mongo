const Todo = require("../Model/Todo");

const createTodos = async (req, res) => {
  try {
    const createTodo = new Todo(req.body);
    const saveTodo = await createTodo.save();
    res.json(saveTodo);
  } catch (error) {
    res.json("Error");
  }
};

const getTodos = async (req, res) => {
  try {
    const getall = await Todo.find();
    res.json(getall);
  } catch (error) {
    res.json("error");
  }
};

const updateTodos = async (req, res) => {
  try {
    const editItem = await Todo.findById(req.params.id);
    const tonew = await editItem.updateOne({ $set: req.body });
    res.json(tonew);
  } catch (error) {
    res.json("error");
  }
};

const deleteTodos = async (req, res) => {
  try {
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Item has been deleted" });
  } catch (error) {
    res.json("error _ error");
  }
};

module.exports = { getTodos, createTodos, updateTodos, deleteTodos };
