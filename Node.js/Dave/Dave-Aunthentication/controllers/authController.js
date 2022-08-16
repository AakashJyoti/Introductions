const usersDb = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
  const { user, password } = req.body;
  if (!user || !password)
    return res
      .status(400)
      .json({ message: "User name and password are required" });

  const foundUser = usersDb.users.find((person) => (person.username === user));
  if (!foundUser) return res.sendStatus(401); //unAuthorized

  //evaluate password
  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
    res.json({ success: `User ${user} is logged in!..` });
  } else {
    res.json({ error: "user not find" });
  }
};

module.exports = { handleLogin };
