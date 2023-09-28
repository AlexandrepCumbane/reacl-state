require("../models/Users");
const { json } = require("body-parser");
const mongoose = require("../database/connection");
const User = mongoose.model("user");

class UserController {
    async login(req, res) {
        email = req.body.email;
        password = req.body.password;
    }

    async sigin(req, res) {

        try {
            const newUser = await User.create(req.body);
            console.log(newUser)
            return res.status(200).json(newUser);
        } catch (error) {
            console.error(error);
            return res.status(400).json(error);
        }
    }
}

module.exports = new UserController();
