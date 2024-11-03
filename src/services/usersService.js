const getUsers = async () => {
  return {
    users: {
      id: 1,
      name: "Jongwoo Lim",
    },
  };
};

const usersService = {
  getUsers,
};

export default usersService;
