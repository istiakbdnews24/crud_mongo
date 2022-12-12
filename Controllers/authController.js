const { User } = require("../Model/User");

const bcrypt = require("bcrypt");

const authUser = async (req, res) => {
  
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");

  const validUser = bcrypt.compare(req.body.password, user.password);

  if (!validUser) return res.status(400).send("Invalid email or password");

  res.send("Login Successful");
};

module.exports = { authUser };
