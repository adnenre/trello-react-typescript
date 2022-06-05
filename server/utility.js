const findUser = (users, data) => {
  const user = users.find(
    ({ username, password }) =>
      username === data.username && password === data.password
  );
  return user;
};
const findUserByEmail = (users, data) => {
  const user = users.find((user) => user.email === data.email);

  return user;
};

module.exports = {
  findUser,
  findUserByEmail,
};
