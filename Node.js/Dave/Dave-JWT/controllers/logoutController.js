const usersDb = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const fsPromisis = require("fs").promises;
const path = require("path");

const handleLogout = async (req, res) => {
  // On Client, also delete the accessToken

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // No content to send back
  const refreshToken = cookies.jwt;

  //  Is refreshToken in Db
  const foundUser = usersDb.users.find(
    (person) => person.refreshToken === refreshToken
  );
  if (!foundUser) {
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    return res.sendStatus(204);
  }

  //   Delete the Refresh Token in Db
  const otherUsers = usersDb.users.filter(
    (person) => person.refreshToken !== foundUser.refreshToken
  );
  const currentUser = { ...foundUser, refreshToken: "" };
  usersDb.setUsers({ ...otherUsers, currentUser });
  await fsPromisis.writeFile(
    path.join(__dirname, "..", "model", "users.json"),
    JSON.stringify(usersDb.users)
  );

  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  }); //secure: true - only serves on https
  res.sendStatus(204);
};

module.exports = { handleLogout };
