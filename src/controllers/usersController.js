import usersService from "../services/usersService.js";

const getUsers = async (req, res, next) => {
  try {
    const users = await usersService.getUsers();

    res.status(200).json(users);
  } catch (e) {
    console.log("Failed to get users:", e);
  }
};

const usersController = {
  getUsers,
};

export default usersController;
