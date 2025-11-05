import jwt from "jsonwebtoken";

export const getUserToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.Access_Key, { expiresIn: "1d" });
};