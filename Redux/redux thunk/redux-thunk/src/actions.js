export const showUsers = () => ({
  type: "Show_users",
});

export const addUser = (user) => ({
  type: "ADD_USER",
  payload: user,
});
