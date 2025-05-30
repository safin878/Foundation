import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:", error);
  }
};

export default connectDB;
