import express from "express";
import mongoose from "mongoose";
import User from "./Schema.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
	try {
		const { name, email, contact, pass, dob, gender } = req.body;

		const newUser = new User({
			Name: name,
			Email: email,
			Contact: parseInt(contact),
			Pasword: pass,
			Dob: dob,
			Gender: gender,
		});

		await newUser.save();

		res.json({ msg: "Registration successfull" });
	} catch (error) {
		res.json({ Error: error });
	}
});

export default router;
