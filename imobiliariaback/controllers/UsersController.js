require("../models/Users");
const { json } = require("body-parser");
const mongoose = require("../database/connection");
const User = mongoose.model("user");

class UserController {
    async login(req, res) {
        const email = req.body.email;
        const password = req.body.password;

        try {
            const isEmailValid = await User.findOne({ email: email }).select("email password");

            if (!isEmailValid) {
                return res.status(404).json({ message: "Invalid email" });
            }
            const isPasswordValid = password === isEmailValid.password;

            return res.status(200).json(isPasswordValid);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async sigin(req, res) {z
        try {
            const newUser = await User.create(req.body);
            console.log(newUser);
            return res.status(200).json(newUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json(error);
        }
    }
}

module.exports = new UserController();
