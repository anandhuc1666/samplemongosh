import User from "../model/userSchema.js";
import bcrypt, { hash } from "bcrypt";
import { getUserToken } from "../util/jwt.js";

export const register = async (req, res) => {
  const { name, email, password, number } = req.body;
  try {
    if (!name || !email || !password || !number) {
      return res.status(400).json({ message: "please fill the form" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(404).json({ message: "user already exsisited" });
    }
    const hidPass = await bcrypt.hash(password, 8);
    const newUser = await User.create({
      name: name,
      email: email,
      password: hidPass,
      number: number,
    });
    await newUser.save();
    res.status(200).json({ message: "user register successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internel server issue" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(404).json({ message: "please fill the form" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "email not valide" });
    }
    const covertPass = await bcrypt.compare(password, user.password);
    if (!covertPass) {
      return res.status(404).json({ message: "user password is invalid" });
    }
    const userToken = getUserToken(user._id);
    res.cookie("userToken", userToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    res.status(200).json({ message: "user login sucessfully",userToken });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server internel issue" });
  }
};

export const salaryCheck = async (req, res) => {
  try {
    const collectall = await User.find();
    console.log(collectall);
    const salary = collectall.map((item) => {
      return {
        _id: item.name,
        number: item.number,
      };
    });
    console.log(salary);
    res.status(200).json({ message: "total", salary });
  } catch (error) {
    console.log(error);
  }
};
