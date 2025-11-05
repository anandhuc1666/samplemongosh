import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const Newmongoose = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("mongoDB connected");
  } catch (error) {
    console.log("server not connected", error);
  }
};
export default Newmongoose
