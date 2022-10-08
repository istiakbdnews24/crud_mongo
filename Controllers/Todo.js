const Todo = require("../Model/Todo");

const createTodos = async (req, res) => {
  const createTodo = new Todo(req.body);

  try {
    const saveTodo = await createTodo.save();

    res.json(saveTodo);
  } catch (error) {
    res.send("Error");
  }
};

const getTodos = async (req, res) => {
  const getall = await Todo.find();

  try {
    res.send(getall);
  } catch (error) {
    res.send("error");
  }
};

const updateTodos = async (req, res) => {
  const editItem = await Todo.findById(req.params.id);

  const tonew = await editItem.updateOne({ $set: req.body });

  res.send(tonew);
};

const deleteTodos = async (req, res)=>{

  try {

    const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
    res.json({message:"Item has been deleted"});
    
  } catch (error) {
    res.send("error");
  }
 
}

module.exports = { getTodos, createTodos, updateTodos, deleteTodos };
