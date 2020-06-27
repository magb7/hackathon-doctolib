const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  users.find((user) => {
    return user.room === room && user.name === name;
  });
  const user = { id, name, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });

  if (index !== -1) {
    users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => {
    return user.id === id;
  });
};

const getUserInRoom = (room) => {
  return users.filter((user) => {
    return user.room === room;
  });
};

module.exports = { addUser, removeUser, getUser, getUserInRoom };
