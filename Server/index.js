import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "./User.js";

const app = express();
app.use(cors());
app.use(express.json())
const port = 8000;
const uri = "mongodb://localhost:27017/Users";

mongoose
	.connect(uri)
	.then(() => {
		console.log("Database connected");
	})
	.catch((err) => {
		console.log(err);
	});

app.use("/User", User);

app.listen(port, () => {
	console.log("App is running on port " + port);
});
