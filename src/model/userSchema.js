import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  number: {
    type: Number,
  },
});

const User = mongoose.model("clites", UserSchema);
export default User;
