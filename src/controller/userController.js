import User from "../model/userSchema.js";

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
    const newUser = await User.create({
      name,
      email,
      password,
      number,
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
    if (user.password != password) {
      return res.status(404).json({ message: "user password is invalid" });
    }
    res.status(200).json({ message: "user login sucessfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server internel issue" });
  }
};
