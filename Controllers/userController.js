const { User } = require("../Model/User");

const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  let user = {};

  user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("user already register");

  user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  try {
    const result = await user.save();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { signup };
