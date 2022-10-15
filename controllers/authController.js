const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports.add_user = async (req, res) => {
    try {
        const { name, lastname, username, password } = req.body;
        if (!(username && password && name && lastname)) {
            res.status(400).send("All input is required");
        }
        const oldUser = await User.findOne({ username });
        if (oldUser) {
            return res.status(409).send("You are oldUser plese login,Now!!");
        }
        encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            lastname,
            username,
            password: encryptedPassword
        })
        const token = jwt.sign(
            { user_id: user._id, username },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h"
            }
        )
        user.token = token;
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }
}
module.exports.getUser = async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!(username && password)) {
            res.status(400).send("All input is required");
        }
        const user = await User.findOne({ username });
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                {
                    user_id: user._id, username
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h"
                }
            )
            user.token = token;
            res.status(200).json(user);
        }
        res.status(400).send('Invalid');
    } catch (err) {
        console.log(err);
    }
}
module.exports.logout = async (req, res) => {
    req.token = "";
    {
        req.token == "" ?
            res.status(200).send('Plz Login').redirect('/login')
            : res.status(400).send('Invalid')
    }
}
