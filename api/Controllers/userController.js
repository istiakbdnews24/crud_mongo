const { User, validate } = require("../Model/User");
const bcrypt = require("bcrypt");
const _ = require("lodash");

const signup = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = {};

  user = await User.findOne({
    email: req.body.email,
  });

  if (user) return res.status(400).send("user already register");

  user = new User(_.pick(req.body, ["username", "email", "password"]));

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  const token = user.generateJWT();

  const result = await user.save();

  return res.send({
    message: "Registration successful",
    token: token,
    data: _.pick(result, ["_id", "email", "password"]),
  });
};

const signIn = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).send("Invalid emial or password");

  const validUser = await bcrypt.compare(req.body.password, user.password);

  if (!validUser) return res.status(400).send("Invalid email or password");

  const token = user.generateJWT();

  return res.status(201).send({
    message: "Login successful",
    token: token,
    user: _.pick(user, ["email", "password"]),
  });
};

module.exports = { signup, signIn };
