// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import { configDotenv } from "dotenv";
// import todoRoute from "./src/Routes/todo.route.js";
// import userRoute from "./src/Routes/user.route.js";
// import cookieParser from "cookie-parser";
// const app = express();

// configDotenv();
// const port = process.env.PORT || 3000;
// const DB_URI = process.env.MONGODB_URI;

// //middlewares :-
// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
//     methods:"GET,POST,PUT,DELETE",
//     allowedHeaders:["Content-Type","Authorization"]
//   }),
// );

// // database connection code:-
// try {
//   await mongoose.connect(DB_URI);
//   console.log("Connected to MongoDB");
// } catch (error) {
//   console.log("Database connection error:", error);
// }

// // Routes:-

// app.use("/todo", todoRoute);
// app.use("/user", userRoute);
// app.listen(port, () => {
//   console.log(`server is starting on http://localhost:${port}`);
// });


import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import todoRoute from "./src/Routes/todo.route.js";
import userRoute from "./src/Routes/user.route.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 4002;
const DB_URI = process.env.MONGODB_URI;

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"], // Add other headers you want to allow here.
  })
);

// Database connection code
try {
  await mongoose.connect(DB_URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error);
}

// routes
app.use("/todo", todoRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});