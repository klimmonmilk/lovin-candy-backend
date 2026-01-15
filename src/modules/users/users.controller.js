import { User } from "./users.model.js"

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return next(error);
  }
};

export const createUser = async (req, res, next) => {
  const { username, email, password, first_name, last_name, address, role } = req.body;

  try {
    const doc = await User.create({ username, email, password, first_name, last_name, address, role });

    return res.status(201).json({
      success: true,
      data: doc,
    });
  } catch (error) {
    return next(error);
  }
};