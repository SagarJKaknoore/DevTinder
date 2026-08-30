import mongoose from "mongoose";

const dataBase = async () => {
  try {
    await mongoose.connect("mongodb+srv://sagarkaknoor_db_user:eTfcrTKVdMTgJwC3@nodejsfirst.hzydsrm.mongodb.net/devTinder");

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default dataBase;
