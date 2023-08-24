import mongoose from "mongoose";
import dotenv from "dotenv";

//initialize dotenv
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

//connecting database through mongoose
const Connection = () => {
  const MONGODB_URL = `mongodb://${USERNAME}:${PASSWORD}@ac-9w8plrl-shard-00-00.mjayfyr.mongodb.net:27017,ac-9w8plrl-shard-00-01.mjayfyr.mongodb.net:27017,ac-9w8plrl-shard-00-02.mjayfyr.mongodb.net:27017/?ssl=true&replicaSet=atlas-114msn-shard-0&authSource=admin&retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });

  mongoose.connection.on("error", () => {
    console.log("Error while connecting with the database", error.message);
  });
};

export default Connection;
