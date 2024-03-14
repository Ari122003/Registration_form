import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
	Name: String,
	Email: String,
	Contact: Number,
	Pasword: String,
	Dob: String,
	Gender: String,
});

export default mongoose.model("User", userSchema);
